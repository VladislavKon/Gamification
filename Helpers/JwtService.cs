
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Gamification.Helpers
{
    
    public class JwtService
    {
        private string secureKey = "mysupersecret_secretkey!123"; // ключ для шифрации
        public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securiryToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securiryToken);
        }
        public JwtSecurityToken Verify (string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secureKey);

            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false
            } , out SecurityToken validateToken);

            return (JwtSecurityToken)validateToken;
        }

    }
}
