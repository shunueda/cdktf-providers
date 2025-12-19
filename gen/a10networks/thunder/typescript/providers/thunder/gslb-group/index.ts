// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Address learned from other controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#auto_map_learn GslbGroup#auto_map_learn}
  */
  readonly autoMapLearn?: number;
  /**
  * Primary Controller's IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#auto_map_primary GslbGroup#auto_map_primary}
  */
  readonly autoMapPrimary?: number;
  /**
  * Choose Best IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#auto_map_smart GslbGroup#auto_map_smart}
  */
  readonly autoMapSmart?: number;
  /**
  * Every member can do config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#config_anywhere GslbGroup#config_anywhere}
  */
  readonly configAnywhere?: number;
  /**
  * Merge old master's config when new one take over
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#config_merge GslbGroup#config_merge}
  */
  readonly configMerge?: number;
  /**
  * Accept config-save message from master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#config_save GslbGroup#config_save}
  */
  readonly configSave?: number;
  /**
  * Data Interface IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#data_interface GslbGroup#data_interface}
  */
  readonly dataInterface?: number;
  /**
  * Specify time for gslb group to delay start formation if VCS is enabled (Specify delay start for VCS, unit:minute,default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#delay_start GslbGroup#delay_start}
  */
  readonly delayStart?: number;
  /**
  * Discover member via DNS Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#dns_discover GslbGroup#dns_discover}
  */
  readonly dnsDiscover?: number;
  /**
  * Join GSLB Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#enable GslbGroup#enable}
  */
  readonly enable?: number;
  /**
  * Force GSLB to full sync config and files to members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#force_full_sync GslbGroup#force_full_sync}
  */
  readonly forceFullSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#id GslbGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Learn neighbour information from other controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#learn GslbGroup#learn}
  */
  readonly learn?: number;
  /**
  * Management Interface IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#mgmt_interface GslbGroup#mgmt_interface}
  */
  readonly mgmtInterface?: number;
  /**
  * Specify Group domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#name GslbGroup#name}
  */
  readonly name: string;
  /**
  * Specify Local Priority, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#priority GslbGroup#priority}
  */
  readonly priority?: number;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN (Default Query type); 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#resolve_as GslbGroup#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * Run GSLB Group in standalone mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#standalone GslbGroup#standalone}
  */
  readonly standalone?: number;
  /**
  * Set DNS Suffix (Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#suffix GslbGroup#suffix}
  */
  readonly suffix?: string;
  /**
  * Specify timeout for gslb config sync (Specify timeout, unit:minute,default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#sync_timeout GslbGroup#sync_timeout}
  */
  readonly syncTimeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#user_tag GslbGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#uuid GslbGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * primary_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#primary_ipv6_list GslbGroup#primary_ipv6_list}
  */
  readonly primaryIpv6List?: GslbGroupPrimaryIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * primary_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#primary_list GslbGroup#primary_list}
  */
  readonly primaryList?: GslbGroupPrimaryListStruct[] | cdktf.IResolvable;
}
export interface GslbGroupPrimaryIpv6ListStruct {
  /**
  * Specify Primary controller's IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#primary_ipv6 GslbGroup#primary_ipv6}
  */
  readonly primaryIpv6?: string;
}

export function gslbGroupPrimaryIpv6ListStructToTerraform(struct?: GslbGroupPrimaryIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_ipv6: cdktf.stringToTerraform(struct!.primaryIpv6),
  }
}


export function gslbGroupPrimaryIpv6ListStructToHclTerraform(struct?: GslbGroupPrimaryIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbGroupPrimaryIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbGroupPrimaryIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpv6 = this._primaryIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbGroupPrimaryIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryIpv6 = value.primaryIpv6;
    }
  }

  // primary_ipv6 - computed: false, optional: true, required: false
  private _primaryIpv6?: string; 
  public get primaryIpv6() {
    return this.getStringAttribute('primary_ipv6');
  }
  public set primaryIpv6(value: string) {
    this._primaryIpv6 = value;
  }
  public resetPrimaryIpv6() {
    this._primaryIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv6Input() {
    return this._primaryIpv6;
  }
}

export class GslbGroupPrimaryIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbGroupPrimaryIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbGroupPrimaryIpv6ListStructOutputReference {
    return new GslbGroupPrimaryIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbGroupPrimaryListStruct {
  /**
  * Specify Primary controller's IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#primary GslbGroup#primary}
  */
  readonly primary?: string;
}

export function gslbGroupPrimaryListStructToTerraform(struct?: GslbGroupPrimaryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
  }
}


export function gslbGroupPrimaryListStructToHclTerraform(struct?: GslbGroupPrimaryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbGroupPrimaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbGroupPrimaryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbGroupPrimaryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}

export class GslbGroupPrimaryListStructList extends cdktf.ComplexList {
  public internalValue? : GslbGroupPrimaryListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbGroupPrimaryListStructOutputReference {
    return new GslbGroupPrimaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group thunder_gslb_group}
*/
export class GslbGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbGroup to import
  * @param importFromId The id of the existing GslbGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_group thunder_gslb_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GslbGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_group',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoMapLearn = config.autoMapLearn;
    this._autoMapPrimary = config.autoMapPrimary;
    this._autoMapSmart = config.autoMapSmart;
    this._configAnywhere = config.configAnywhere;
    this._configMerge = config.configMerge;
    this._configSave = config.configSave;
    this._dataInterface = config.dataInterface;
    this._delayStart = config.delayStart;
    this._dnsDiscover = config.dnsDiscover;
    this._enable = config.enable;
    this._forceFullSync = config.forceFullSync;
    this._id = config.id;
    this._learn = config.learn;
    this._mgmtInterface = config.mgmtInterface;
    this._name = config.name;
    this._priority = config.priority;
    this._resolveAs = config.resolveAs;
    this._standalone = config.standalone;
    this._suffix = config.suffix;
    this._syncTimeout = config.syncTimeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._primaryIpv6List.internalValue = config.primaryIpv6List;
    this._primaryList.internalValue = config.primaryList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_map_learn - computed: false, optional: true, required: false
  private _autoMapLearn?: number; 
  public get autoMapLearn() {
    return this.getNumberAttribute('auto_map_learn');
  }
  public set autoMapLearn(value: number) {
    this._autoMapLearn = value;
  }
  public resetAutoMapLearn() {
    this._autoMapLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapLearnInput() {
    return this._autoMapLearn;
  }

  // auto_map_primary - computed: false, optional: true, required: false
  private _autoMapPrimary?: number; 
  public get autoMapPrimary() {
    return this.getNumberAttribute('auto_map_primary');
  }
  public set autoMapPrimary(value: number) {
    this._autoMapPrimary = value;
  }
  public resetAutoMapPrimary() {
    this._autoMapPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapPrimaryInput() {
    return this._autoMapPrimary;
  }

  // auto_map_smart - computed: false, optional: true, required: false
  private _autoMapSmart?: number; 
  public get autoMapSmart() {
    return this.getNumberAttribute('auto_map_smart');
  }
  public set autoMapSmart(value: number) {
    this._autoMapSmart = value;
  }
  public resetAutoMapSmart() {
    this._autoMapSmart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapSmartInput() {
    return this._autoMapSmart;
  }

  // config_anywhere - computed: false, optional: true, required: false
  private _configAnywhere?: number; 
  public get configAnywhere() {
    return this.getNumberAttribute('config_anywhere');
  }
  public set configAnywhere(value: number) {
    this._configAnywhere = value;
  }
  public resetConfigAnywhere() {
    this._configAnywhere = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAnywhereInput() {
    return this._configAnywhere;
  }

  // config_merge - computed: false, optional: true, required: false
  private _configMerge?: number; 
  public get configMerge() {
    return this.getNumberAttribute('config_merge');
  }
  public set configMerge(value: number) {
    this._configMerge = value;
  }
  public resetConfigMerge() {
    this._configMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMergeInput() {
    return this._configMerge;
  }

  // config_save - computed: false, optional: true, required: false
  private _configSave?: number; 
  public get configSave() {
    return this.getNumberAttribute('config_save');
  }
  public set configSave(value: number) {
    this._configSave = value;
  }
  public resetConfigSave() {
    this._configSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSaveInput() {
    return this._configSave;
  }

  // data_interface - computed: false, optional: true, required: false
  private _dataInterface?: number; 
  public get dataInterface() {
    return this.getNumberAttribute('data_interface');
  }
  public set dataInterface(value: number) {
    this._dataInterface = value;
  }
  public resetDataInterface() {
    this._dataInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInterfaceInput() {
    return this._dataInterface;
  }

  // delay_start - computed: false, optional: true, required: false
  private _delayStart?: number; 
  public get delayStart() {
    return this.getNumberAttribute('delay_start');
  }
  public set delayStart(value: number) {
    this._delayStart = value;
  }
  public resetDelayStart() {
    this._delayStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayStartInput() {
    return this._delayStart;
  }

  // dns_discover - computed: false, optional: true, required: false
  private _dnsDiscover?: number; 
  public get dnsDiscover() {
    return this.getNumberAttribute('dns_discover');
  }
  public set dnsDiscover(value: number) {
    this._dnsDiscover = value;
  }
  public resetDnsDiscover() {
    this._dnsDiscover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDiscoverInput() {
    return this._dnsDiscover;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // force_full_sync - computed: false, optional: true, required: false
  private _forceFullSync?: number; 
  public get forceFullSync() {
    return this.getNumberAttribute('force_full_sync');
  }
  public set forceFullSync(value: number) {
    this._forceFullSync = value;
  }
  public resetForceFullSync() {
    this._forceFullSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceFullSyncInput() {
    return this._forceFullSync;
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

  // learn - computed: false, optional: true, required: false
  private _learn?: number; 
  public get learn() {
    return this.getNumberAttribute('learn');
  }
  public set learn(value: number) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // mgmt_interface - computed: false, optional: true, required: false
  private _mgmtInterface?: number; 
  public get mgmtInterface() {
    return this.getNumberAttribute('mgmt_interface');
  }
  public set mgmtInterface(value: number) {
    this._mgmtInterface = value;
  }
  public resetMgmtInterface() {
    this._mgmtInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtInterfaceInput() {
    return this._mgmtInterface;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // resolve_as - computed: false, optional: true, required: false
  private _resolveAs?: string; 
  public get resolveAs() {
    return this.getStringAttribute('resolve_as');
  }
  public set resolveAs(value: string) {
    this._resolveAs = value;
  }
  public resetResolveAs() {
    this._resolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAsInput() {
    return this._resolveAs;
  }

  // standalone - computed: false, optional: true, required: false
  private _standalone?: number; 
  public get standalone() {
    return this.getNumberAttribute('standalone');
  }
  public set standalone(value: number) {
    this._standalone = value;
  }
  public resetStandalone() {
    this._standalone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneInput() {
    return this._standalone;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // sync_timeout - computed: false, optional: true, required: false
  private _syncTimeout?: number; 
  public get syncTimeout() {
    return this.getNumberAttribute('sync_timeout');
  }
  public set syncTimeout(value: number) {
    this._syncTimeout = value;
  }
  public resetSyncTimeout() {
    this._syncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTimeoutInput() {
    return this._syncTimeout;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // primary_ipv6_list - computed: false, optional: true, required: false
  private _primaryIpv6List = new GslbGroupPrimaryIpv6ListStructList(this, "primary_ipv6_list", false);
  public get primaryIpv6List() {
    return this._primaryIpv6List;
  }
  public putPrimaryIpv6List(value: GslbGroupPrimaryIpv6ListStruct[] | cdktf.IResolvable) {
    this._primaryIpv6List.internalValue = value;
  }
  public resetPrimaryIpv6List() {
    this._primaryIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv6ListInput() {
    return this._primaryIpv6List.internalValue;
  }

  // primary_list - computed: false, optional: true, required: false
  private _primaryList = new GslbGroupPrimaryListStructList(this, "primary_list", false);
  public get primaryList() {
    return this._primaryList;
  }
  public putPrimaryList(value: GslbGroupPrimaryListStruct[] | cdktf.IResolvable) {
    this._primaryList.internalValue = value;
  }
  public resetPrimaryList() {
    this._primaryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryListInput() {
    return this._primaryList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_map_learn: cdktf.numberToTerraform(this._autoMapLearn),
      auto_map_primary: cdktf.numberToTerraform(this._autoMapPrimary),
      auto_map_smart: cdktf.numberToTerraform(this._autoMapSmart),
      config_anywhere: cdktf.numberToTerraform(this._configAnywhere),
      config_merge: cdktf.numberToTerraform(this._configMerge),
      config_save: cdktf.numberToTerraform(this._configSave),
      data_interface: cdktf.numberToTerraform(this._dataInterface),
      delay_start: cdktf.numberToTerraform(this._delayStart),
      dns_discover: cdktf.numberToTerraform(this._dnsDiscover),
      enable: cdktf.numberToTerraform(this._enable),
      force_full_sync: cdktf.numberToTerraform(this._forceFullSync),
      id: cdktf.stringToTerraform(this._id),
      learn: cdktf.numberToTerraform(this._learn),
      mgmt_interface: cdktf.numberToTerraform(this._mgmtInterface),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resolve_as: cdktf.stringToTerraform(this._resolveAs),
      standalone: cdktf.numberToTerraform(this._standalone),
      suffix: cdktf.stringToTerraform(this._suffix),
      sync_timeout: cdktf.numberToTerraform(this._syncTimeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      primary_ipv6_list: cdktf.listMapper(gslbGroupPrimaryIpv6ListStructToTerraform, true)(this._primaryIpv6List.internalValue),
      primary_list: cdktf.listMapper(gslbGroupPrimaryListStructToTerraform, true)(this._primaryList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_map_learn: {
        value: cdktf.numberToHclTerraform(this._autoMapLearn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_map_primary: {
        value: cdktf.numberToHclTerraform(this._autoMapPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_map_smart: {
        value: cdktf.numberToHclTerraform(this._autoMapSmart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_anywhere: {
        value: cdktf.numberToHclTerraform(this._configAnywhere),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_merge: {
        value: cdktf.numberToHclTerraform(this._configMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_save: {
        value: cdktf.numberToHclTerraform(this._configSave),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_interface: {
        value: cdktf.numberToHclTerraform(this._dataInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_start: {
        value: cdktf.numberToHclTerraform(this._delayStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_discover: {
        value: cdktf.numberToHclTerraform(this._dnsDiscover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_full_sync: {
        value: cdktf.numberToHclTerraform(this._forceFullSync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn: {
        value: cdktf.numberToHclTerraform(this._learn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_interface: {
        value: cdktf.numberToHclTerraform(this._mgmtInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_as: {
        value: cdktf.stringToHclTerraform(this._resolveAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone: {
        value: cdktf.numberToHclTerraform(this._standalone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suffix: {
        value: cdktf.stringToHclTerraform(this._suffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_timeout: {
        value: cdktf.numberToHclTerraform(this._syncTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ipv6_list: {
        value: cdktf.listMapperHcl(gslbGroupPrimaryIpv6ListStructToHclTerraform, true)(this._primaryIpv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbGroupPrimaryIpv6ListStructList",
      },
      primary_list: {
        value: cdktf.listMapperHcl(gslbGroupPrimaryListStructToHclTerraform, true)(this._primaryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbGroupPrimaryListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
