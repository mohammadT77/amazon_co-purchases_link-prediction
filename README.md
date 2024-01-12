# amazon_co-purchases_link-prediction
Network analysis and link prediction on Amazon co-purchases graph dataset.

_**University of Padova, winter 2023-2024**_  
_**Course:** Learning From Network_  
_**Professor:** Prof. Fabio Vandin_  

### Members: 
 - Navid Pourhadi Hassanabad, 2080655
 - MohammadAmin Hajibagher Tehran, 2080658
 - Pouya Rahmati, 2072533


### Docs:
#### Cleaners:
 ##### jsonFix.js:
 Fix the json format of the amazon_co-purchases dataset. initially datasets are in a wrong json format like this:
`{'asin': '8985802089', 'salesRank': {'Beauty': 878035}, 'imUrl': '...', 'categories': [['All Beauty']], 'title': 'Shiseido Aquair Shampoo/Conditioner/Spray SET - 600ml*2 + 220ml'}`  
As you see this format is not parsable by any json parsers. Using jsonFix we can fix this format.

**Usage**: 
```bash
node jsonFix.js <SOURCE_FILE_PATH> [target_fields...] [-a | --all (for all fields)]
```
