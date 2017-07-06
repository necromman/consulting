# Prefix
Prefix js object keys.

### Before prefix object

```
{"arabica":"Arabica coffee","robusta":"Robusta coffee"}
```

After prefix object: 

```
Prefix.key('super-', coffee);
```

Result:
```
{"super-arabica":"Arabica coffee","super-robusta":"Robusta coffee"}
```

### After prefix with suffix object

```
Prefix.key('super-', coffee, '-cup') 
```

Result:
```
{"super-arabica-cup":"Arabica coffee","super-robusta-cup":"Robusta coffee"}
```
