/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"TddAT0ABwDWD1XofvtXuU8TOLPSj1HCe"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"3rJK6RiDaZW3CK1LS9bk30H0bWmW83PU"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"Ku2ChvUA63zqWkV4BImNXosRcYlP2ji0"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"tZFLhl1444GaLYJdDDioycpBiAhgdnkR"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"u4ueVmIFxbExYTNr1xhvPa1ogX6DlKKn"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"QldRcc1MyJo3jjyvRP2382kBz7derBot"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
