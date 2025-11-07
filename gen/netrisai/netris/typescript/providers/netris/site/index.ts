// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible values: `permit` or `deny`. Deny - Layer-3 packet forwarding is denied by default. ACLs are required to permit necessary traffic flows. Deny ACLs will be applied before Permit ACLs. Permit - Layer-3 packet forwarding is allowed by default. ACLs are required to deny unwanted traffic flows. Permit ACLs will be applied before Deny ACLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#acldefaultpolicy Site#acldefaultpolicy}
  */
  readonly acldefaultpolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#id Site#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#name Site#name}
  */
  readonly name: string;
  /**
  * Site public ASN that should be used for external bgp peer configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#publicasn Site#publicasn}
  */
  readonly publicasn: number;
  /**
  * ASN for ROH (Routing on the Host) compute instances, should be unique within the scope of a site, can be same for different sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#rohasn Site#rohasn}
  */
  readonly rohasn: number;
  /**
  * ROH Routing profile defines set of routing prefixes to be advertised to ROH instances. Possible values: `default`, `default_agg`, `full`. Default route only - Will advertise 0.0.0.0/0 + loopback address of physically connected switch. Default + Aggregate - Will add prefixes of defined subnets + `Default` profile. Full - Will advertise all prefixes available in the routing table of the connected switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#rohroutingprofile Site#rohroutingprofile}
  */
  readonly rohroutingprofile: string;
  /**
  * Site to site VPN mode. Site mesh available values are: `disabled`, `hub`, `spoke`, `dspoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#sitemesh Site#sitemesh}
  */
  readonly sitemesh: string;
  /**
  * Possible values: `equinix_metal`, `phoenixnap_bmc`, `dot1q_trunk`, `netris`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#switchfabric Site#switchfabric}
  */
  readonly switchfabric?: string;
  /**
  * VLAN range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#vlanrange Site#vlanrange}
  */
  readonly vlanrange?: string;
  /**
  * The range of VLAN IDs for automatic VLAN assignment. If not specified it will be the same value as vlanrange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#vlanrangeautoassign Site#vlanrangeautoassign}
  */
  readonly vlanrangeautoassign?: string;
  /**
  * ASN for ROH (Routing on the Host) virtual compute instances, should be unique within the scope of a site, can be same for different sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#vmasn Site#vmasn}
  */
  readonly vmasn: number;
  /**
  * switchfabricproviders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#switchfabricproviders Site#switchfabricproviders}
  */
  readonly switchfabricproviders?: SiteSwitchfabricproviders[] | cdktf.IResolvable;
}
export interface SiteSwitchfabricprovidersEquinixmetal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#location Site#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#projectapikey Site#projectapikey}
  */
  readonly projectapikey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#projectid Site#projectid}
  */
  readonly projectid: string;
}

export function siteSwitchfabricprovidersEquinixmetalToTerraform(struct?: SiteSwitchfabricprovidersEquinixmetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    projectapikey: cdktf.stringToTerraform(struct!.projectapikey),
    projectid: cdktf.stringToTerraform(struct!.projectid),
  }
}


export function siteSwitchfabricprovidersEquinixmetalToHclTerraform(struct?: SiteSwitchfabricprovidersEquinixmetal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projectapikey: {
      value: cdktf.stringToHclTerraform(struct!.projectapikey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projectid: {
      value: cdktf.stringToHclTerraform(struct!.projectid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSwitchfabricprovidersEquinixmetalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteSwitchfabricprovidersEquinixmetal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectapikey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectapikey = this._projectapikey;
    }
    if (this._projectid !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectid = this._projectid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSwitchfabricprovidersEquinixmetal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectapikey = undefined;
      this._projectid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectapikey = value.projectapikey;
      this._projectid = value.projectid;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // projectapikey - computed: false, optional: false, required: true
  private _projectapikey?: string; 
  public get projectapikey() {
    return this.getStringAttribute('projectapikey');
  }
  public set projectapikey(value: string) {
    this._projectapikey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectapikeyInput() {
    return this._projectapikey;
  }

  // projectid - computed: false, optional: false, required: true
  private _projectid?: string; 
  public get projectid() {
    return this.getStringAttribute('projectid');
  }
  public set projectid(value: string) {
    this._projectid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectidInput() {
    return this._projectid;
  }
}

export class SiteSwitchfabricprovidersEquinixmetalList extends cdktf.ComplexList {
  public internalValue? : SiteSwitchfabricprovidersEquinixmetal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SiteSwitchfabricprovidersEquinixmetalOutputReference {
    return new SiteSwitchfabricprovidersEquinixmetalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSwitchfabricprovidersPhoenixnapbmc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#clientid Site#clientid}
  */
  readonly clientid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#clientsecret Site#clientsecret}
  */
  readonly clientsecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#location Site#location}
  */
  readonly location: string;
}

export function siteSwitchfabricprovidersPhoenixnapbmcToTerraform(struct?: SiteSwitchfabricprovidersPhoenixnapbmc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientid: cdktf.stringToTerraform(struct!.clientid),
    clientsecret: cdktf.stringToTerraform(struct!.clientsecret),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function siteSwitchfabricprovidersPhoenixnapbmcToHclTerraform(struct?: SiteSwitchfabricprovidersPhoenixnapbmc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clientid: {
      value: cdktf.stringToHclTerraform(struct!.clientid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clientsecret: {
      value: cdktf.stringToHclTerraform(struct!.clientsecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSwitchfabricprovidersPhoenixnapbmcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteSwitchfabricprovidersPhoenixnapbmc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientid = this._clientid;
    }
    if (this._clientsecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsecret = this._clientsecret;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSwitchfabricprovidersPhoenixnapbmc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientid = undefined;
      this._clientsecret = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientid = value.clientid;
      this._clientsecret = value.clientsecret;
      this._location = value.location;
    }
  }

  // clientid - computed: false, optional: false, required: true
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: false, optional: false, required: true
  private _clientsecret?: string; 
  public get clientsecret() {
    return this.getStringAttribute('clientsecret');
  }
  public set clientsecret(value: string) {
    this._clientsecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class SiteSwitchfabricprovidersPhoenixnapbmcList extends cdktf.ComplexList {
  public internalValue? : SiteSwitchfabricprovidersPhoenixnapbmc[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SiteSwitchfabricprovidersPhoenixnapbmcOutputReference {
    return new SiteSwitchfabricprovidersPhoenixnapbmcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSwitchfabricproviders {
  /**
  * equinixmetal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#equinixmetal Site#equinixmetal}
  */
  readonly equinixmetal?: SiteSwitchfabricprovidersEquinixmetal[] | cdktf.IResolvable;
  /**
  * phoenixnapbmc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#phoenixnapbmc Site#phoenixnapbmc}
  */
  readonly phoenixnapbmc?: SiteSwitchfabricprovidersPhoenixnapbmc[] | cdktf.IResolvable;
}

export function siteSwitchfabricprovidersToTerraform(struct?: SiteSwitchfabricproviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equinixmetal: cdktf.listMapper(siteSwitchfabricprovidersEquinixmetalToTerraform, true)(struct!.equinixmetal),
    phoenixnapbmc: cdktf.listMapper(siteSwitchfabricprovidersPhoenixnapbmcToTerraform, true)(struct!.phoenixnapbmc),
  }
}


export function siteSwitchfabricprovidersToHclTerraform(struct?: SiteSwitchfabricproviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equinixmetal: {
      value: cdktf.listMapperHcl(siteSwitchfabricprovidersEquinixmetalToHclTerraform, true)(struct!.equinixmetal),
      isBlock: true,
      type: "set",
      storageClassType: "SiteSwitchfabricprovidersEquinixmetalList",
    },
    phoenixnapbmc: {
      value: cdktf.listMapperHcl(siteSwitchfabricprovidersPhoenixnapbmcToHclTerraform, true)(struct!.phoenixnapbmc),
      isBlock: true,
      type: "set",
      storageClassType: "SiteSwitchfabricprovidersPhoenixnapbmcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSwitchfabricprovidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteSwitchfabricproviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equinixmetal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equinixmetal = this._equinixmetal?.internalValue;
    }
    if (this._phoenixnapbmc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoenixnapbmc = this._phoenixnapbmc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSwitchfabricproviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equinixmetal.internalValue = undefined;
      this._phoenixnapbmc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equinixmetal.internalValue = value.equinixmetal;
      this._phoenixnapbmc.internalValue = value.phoenixnapbmc;
    }
  }

  // equinixmetal - computed: false, optional: true, required: false
  private _equinixmetal = new SiteSwitchfabricprovidersEquinixmetalList(this, "equinixmetal", true);
  public get equinixmetal() {
    return this._equinixmetal;
  }
  public putEquinixmetal(value: SiteSwitchfabricprovidersEquinixmetal[] | cdktf.IResolvable) {
    this._equinixmetal.internalValue = value;
  }
  public resetEquinixmetal() {
    this._equinixmetal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equinixmetalInput() {
    return this._equinixmetal.internalValue;
  }

  // phoenixnapbmc - computed: false, optional: true, required: false
  private _phoenixnapbmc = new SiteSwitchfabricprovidersPhoenixnapbmcList(this, "phoenixnapbmc", true);
  public get phoenixnapbmc() {
    return this._phoenixnapbmc;
  }
  public putPhoenixnapbmc(value: SiteSwitchfabricprovidersPhoenixnapbmc[] | cdktf.IResolvable) {
    this._phoenixnapbmc.internalValue = value;
  }
  public resetPhoenixnapbmc() {
    this._phoenixnapbmc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoenixnapbmcInput() {
    return this._phoenixnapbmc.internalValue;
  }
}

export class SiteSwitchfabricprovidersList extends cdktf.ComplexList {
  public internalValue? : SiteSwitchfabricproviders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SiteSwitchfabricprovidersOutputReference {
    return new SiteSwitchfabricprovidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site netris_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/site netris_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_site',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acldefaultpolicy = config.acldefaultpolicy;
    this._id = config.id;
    this._name = config.name;
    this._publicasn = config.publicasn;
    this._rohasn = config.rohasn;
    this._rohroutingprofile = config.rohroutingprofile;
    this._sitemesh = config.sitemesh;
    this._switchfabric = config.switchfabric;
    this._vlanrange = config.vlanrange;
    this._vlanrangeautoassign = config.vlanrangeautoassign;
    this._vmasn = config.vmasn;
    this._switchfabricproviders.internalValue = config.switchfabricproviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acldefaultpolicy - computed: false, optional: false, required: true
  private _acldefaultpolicy?: string; 
  public get acldefaultpolicy() {
    return this.getStringAttribute('acldefaultpolicy');
  }
  public set acldefaultpolicy(value: string) {
    this._acldefaultpolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acldefaultpolicyInput() {
    return this._acldefaultpolicy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // publicasn - computed: false, optional: false, required: true
  private _publicasn?: number; 
  public get publicasn() {
    return this.getNumberAttribute('publicasn');
  }
  public set publicasn(value: number) {
    this._publicasn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicasnInput() {
    return this._publicasn;
  }

  // rohasn - computed: false, optional: false, required: true
  private _rohasn?: number; 
  public get rohasn() {
    return this.getNumberAttribute('rohasn');
  }
  public set rohasn(value: number) {
    this._rohasn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rohasnInput() {
    return this._rohasn;
  }

  // rohroutingprofile - computed: false, optional: false, required: true
  private _rohroutingprofile?: string; 
  public get rohroutingprofile() {
    return this.getStringAttribute('rohroutingprofile');
  }
  public set rohroutingprofile(value: string) {
    this._rohroutingprofile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rohroutingprofileInput() {
    return this._rohroutingprofile;
  }

  // sitemesh - computed: false, optional: false, required: true
  private _sitemesh?: string; 
  public get sitemesh() {
    return this.getStringAttribute('sitemesh');
  }
  public set sitemesh(value: string) {
    this._sitemesh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitemeshInput() {
    return this._sitemesh;
  }

  // switchfabric - computed: false, optional: true, required: false
  private _switchfabric?: string; 
  public get switchfabric() {
    return this.getStringAttribute('switchfabric');
  }
  public set switchfabric(value: string) {
    this._switchfabric = value;
  }
  public resetSwitchfabric() {
    this._switchfabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchfabricInput() {
    return this._switchfabric;
  }

  // vlanrange - computed: true, optional: true, required: false
  private _vlanrange?: string; 
  public get vlanrange() {
    return this.getStringAttribute('vlanrange');
  }
  public set vlanrange(value: string) {
    this._vlanrange = value;
  }
  public resetVlanrange() {
    this._vlanrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanrangeInput() {
    return this._vlanrange;
  }

  // vlanrangeautoassign - computed: true, optional: true, required: false
  private _vlanrangeautoassign?: string; 
  public get vlanrangeautoassign() {
    return this.getStringAttribute('vlanrangeautoassign');
  }
  public set vlanrangeautoassign(value: string) {
    this._vlanrangeautoassign = value;
  }
  public resetVlanrangeautoassign() {
    this._vlanrangeautoassign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanrangeautoassignInput() {
    return this._vlanrangeautoassign;
  }

  // vmasn - computed: false, optional: false, required: true
  private _vmasn?: number; 
  public get vmasn() {
    return this.getNumberAttribute('vmasn');
  }
  public set vmasn(value: number) {
    this._vmasn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasnInput() {
    return this._vmasn;
  }

  // switchfabricproviders - computed: false, optional: true, required: false
  private _switchfabricproviders = new SiteSwitchfabricprovidersList(this, "switchfabricproviders", true);
  public get switchfabricproviders() {
    return this._switchfabricproviders;
  }
  public putSwitchfabricproviders(value: SiteSwitchfabricproviders[] | cdktf.IResolvable) {
    this._switchfabricproviders.internalValue = value;
  }
  public resetSwitchfabricproviders() {
    this._switchfabricproviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchfabricprovidersInput() {
    return this._switchfabricproviders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acldefaultpolicy: cdktf.stringToTerraform(this._acldefaultpolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      publicasn: cdktf.numberToTerraform(this._publicasn),
      rohasn: cdktf.numberToTerraform(this._rohasn),
      rohroutingprofile: cdktf.stringToTerraform(this._rohroutingprofile),
      sitemesh: cdktf.stringToTerraform(this._sitemesh),
      switchfabric: cdktf.stringToTerraform(this._switchfabric),
      vlanrange: cdktf.stringToTerraform(this._vlanrange),
      vlanrangeautoassign: cdktf.stringToTerraform(this._vlanrangeautoassign),
      vmasn: cdktf.numberToTerraform(this._vmasn),
      switchfabricproviders: cdktf.listMapper(siteSwitchfabricprovidersToTerraform, true)(this._switchfabricproviders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acldefaultpolicy: {
        value: cdktf.stringToHclTerraform(this._acldefaultpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicasn: {
        value: cdktf.numberToHclTerraform(this._publicasn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rohasn: {
        value: cdktf.numberToHclTerraform(this._rohasn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rohroutingprofile: {
        value: cdktf.stringToHclTerraform(this._rohroutingprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitemesh: {
        value: cdktf.stringToHclTerraform(this._sitemesh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switchfabric: {
        value: cdktf.stringToHclTerraform(this._switchfabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanrange: {
        value: cdktf.stringToHclTerraform(this._vlanrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanrangeautoassign: {
        value: cdktf.stringToHclTerraform(this._vlanrangeautoassign),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmasn: {
        value: cdktf.numberToHclTerraform(this._vmasn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switchfabricproviders: {
        value: cdktf.listMapperHcl(siteSwitchfabricprovidersToHclTerraform, true)(this._switchfabricproviders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteSwitchfabricprovidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
