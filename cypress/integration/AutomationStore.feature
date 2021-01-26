@store
Feature: Automation test store UI validation

Background: Landing on home page
Given I am on Automation test store home page


Scenario Outline: Product category validation
When I select "<product>" from home page
Then I have displayed with "<totalnumber>" products to select
Examples:
| product               | totalnumber |
| Apparel & accessories | 8           |
| Makeup                | 6           |
| Skincare              | 5           |
| Fragrance             | 9           |
| Men                   | 8           |
| Hair Care             | 4           |
| Books                 | 4           |

Scenario Outline: Successfully place a order
When I select "<product>" from home page
And I opened "<item>" details
And I add category item to the cart
And I checkout from shopping cart
Then I choose guest checkout option to continue
When I filled details and click continue
Then I am displayed with check out confirmation details
When I clicked confirm order
Then I see message "YOUR ORDER HAS BEEN PROCESSED!"

Examples:
| product   | item                 |
| Fragrance | Beauty Eau de Parfum |
| Makeup    | Viva Glam Lipstick   |

Scenario Outline: Validate total amount in shopping cart
When I select "<product>" from home page
And I added multiple items "<items>" to the cart
And I am on shopping cart
Then Total amount displayed is same as "<expectedTotalAmount>"

Examples:
| product               | items                                                                                              | expectedTotalAmount |
| Skincare              | Creme Precieuse Nuit 50ml,Total Moisture Facial Cream,Absolue Eye Precious Cells                   | $349.00             |
| Hair Care             | Eau Parfumee au The Vert Shampoo,Curls to straight Shampoo,Pantene Pro-V Conditioner, Classic Care | $59.90              |