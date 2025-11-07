// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnfVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#account AnfVolume#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#capacity_pool AnfVolume#capacity_pool}
  */
  readonly capacityPool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#client_id AnfVolume#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#id AnfVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#location AnfVolume#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#name AnfVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#netapp_account AnfVolume#netapp_account}
  */
  readonly netappAccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#protocol_types AnfVolume#protocol_types}
  */
  readonly protocolTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#resource_groups AnfVolume#resource_groups}
  */
  readonly resourceGroups: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#service_level AnfVolume#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#size AnfVolume#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#size_unit AnfVolume#size_unit}
  */
  readonly sizeUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#subnet AnfVolume#subnet}
  */
  readonly subnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#subscription AnfVolume#subscription}
  */
  readonly subscription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#virtual_network AnfVolume#virtual_network}
  */
  readonly virtualNetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#volume_path AnfVolume#volume_path}
  */
  readonly volumePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#working_environment_name AnfVolume#working_environment_name}
  */
  readonly workingEnvironmentName: string;
  /**
  * export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#export_policy AnfVolume#export_policy}
  */
  readonly exportPolicy?: AnfVolumeExportPolicy[] | cdktf.IResolvable;
}
export interface AnfVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#allowed_clients AnfVolume#allowed_clients}
  */
  readonly allowedClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#cifs AnfVolume#cifs}
  */
  readonly cifs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#nfsv3 AnfVolume#nfsv3}
  */
  readonly nfsv3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#nfsv41 AnfVolume#nfsv41}
  */
  readonly nfsv41?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#rule_index AnfVolume#rule_index}
  */
  readonly ruleIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#unix_read_only AnfVolume#unix_read_only}
  */
  readonly unixReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#unix_read_write AnfVolume#unix_read_write}
  */
  readonly unixReadWrite?: boolean | cdktf.IResolvable;
}

export function anfVolumeExportPolicyRuleToTerraform(struct?: AnfVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.stringToTerraform(struct!.allowedClients),
    cifs: cdktf.booleanToTerraform(struct!.cifs),
    nfsv3: cdktf.booleanToTerraform(struct!.nfsv3),
    nfsv41: cdktf.booleanToTerraform(struct!.nfsv41),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}


export function anfVolumeExportPolicyRuleToHclTerraform(struct?: AnfVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_clients: {
      value: cdktf.stringToHclTerraform(struct!.allowedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cifs: {
      value: cdktf.booleanToHclTerraform(struct!.cifs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv3: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv41: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv41),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_index: {
      value: cdktf.numberToHclTerraform(struct!.ruleIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unix_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unix_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnfVolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnfVolumeExportPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._cifs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cifs = this._cifs;
    }
    if (this._nfsv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv3 = this._nfsv3;
    }
    if (this._nfsv41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv41 = this._nfsv41;
    }
    if (this._ruleIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIndex = this._ruleIndex;
    }
    if (this._unixReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadOnly = this._unixReadOnly;
    }
    if (this._unixReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadWrite = this._unixReadWrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnfVolumeExportPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClients = undefined;
      this._cifs = undefined;
      this._nfsv3 = undefined;
      this._nfsv41 = undefined;
      this._ruleIndex = undefined;
      this._unixReadOnly = undefined;
      this._unixReadWrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClients = value.allowedClients;
      this._cifs = value.cifs;
      this._nfsv3 = value.nfsv3;
      this._nfsv41 = value.nfsv41;
      this._ruleIndex = value.ruleIndex;
      this._unixReadOnly = value.unixReadOnly;
      this._unixReadWrite = value.unixReadWrite;
    }
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string; 
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }
  public set allowedClients(value: string) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // cifs - computed: false, optional: true, required: false
  private _cifs?: boolean | cdktf.IResolvable; 
  public get cifs() {
    return this.getBooleanAttribute('cifs');
  }
  public set cifs(value: boolean | cdktf.IResolvable) {
    this._cifs = value;
  }
  public resetCifs() {
    this._cifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs;
  }

  // nfsv3 - computed: false, optional: true, required: false
  private _nfsv3?: boolean | cdktf.IResolvable; 
  public get nfsv3() {
    return this.getBooleanAttribute('nfsv3');
  }
  public set nfsv3(value: boolean | cdktf.IResolvable) {
    this._nfsv3 = value;
  }
  public resetNfsv3() {
    this._nfsv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3Input() {
    return this._nfsv3;
  }

  // nfsv41 - computed: false, optional: true, required: false
  private _nfsv41?: boolean | cdktf.IResolvable; 
  public get nfsv41() {
    return this.getBooleanAttribute('nfsv41');
  }
  public set nfsv41(value: boolean | cdktf.IResolvable) {
    this._nfsv41 = value;
  }
  public resetNfsv41() {
    this._nfsv41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv41Input() {
    return this._nfsv41;
  }

  // rule_index - computed: false, optional: true, required: false
  private _ruleIndex?: number; 
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }
  public set ruleIndex(value: number) {
    this._ruleIndex = value;
  }
  public resetRuleIndex() {
    this._ruleIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIndexInput() {
    return this._ruleIndex;
  }

  // unix_read_only - computed: false, optional: true, required: false
  private _unixReadOnly?: boolean | cdktf.IResolvable; 
  public get unixReadOnly() {
    return this.getBooleanAttribute('unix_read_only');
  }
  public set unixReadOnly(value: boolean | cdktf.IResolvable) {
    this._unixReadOnly = value;
  }
  public resetUnixReadOnly() {
    this._unixReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadOnlyInput() {
    return this._unixReadOnly;
  }

  // unix_read_write - computed: false, optional: true, required: false
  private _unixReadWrite?: boolean | cdktf.IResolvable; 
  public get unixReadWrite() {
    return this.getBooleanAttribute('unix_read_write');
  }
  public set unixReadWrite(value: boolean | cdktf.IResolvable) {
    this._unixReadWrite = value;
  }
  public resetUnixReadWrite() {
    this._unixReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadWriteInput() {
    return this._unixReadWrite;
  }
}

export class AnfVolumeExportPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : AnfVolumeExportPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): AnfVolumeExportPolicyRuleOutputReference {
    return new AnfVolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnfVolumeExportPolicy {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#rule AnfVolume#rule}
  */
  readonly rule?: AnfVolumeExportPolicyRule[] | cdktf.IResolvable;
}

export function anfVolumeExportPolicyToTerraform(struct?: AnfVolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(anfVolumeExportPolicyRuleToTerraform, true)(struct!.rule),
  }
}


export function anfVolumeExportPolicyToHclTerraform(struct?: AnfVolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(anfVolumeExportPolicyRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "AnfVolumeExportPolicyRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnfVolumeExportPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnfVolumeExportPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnfVolumeExportPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new AnfVolumeExportPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AnfVolumeExportPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class AnfVolumeExportPolicyList extends cdktf.ComplexList {
  public internalValue? : AnfVolumeExportPolicy[] | cdktf.IResolvable

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
  public get(index: number): AnfVolumeExportPolicyOutputReference {
    return new AnfVolumeExportPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume netapp-cloudmanager_anf_volume}
*/
export class AnfVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_anf_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnfVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnfVolume to import
  * @param importFromId The id of the existing AnfVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnfVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_anf_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/anf_volume netapp-cloudmanager_anf_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnfVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: AnfVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_anf_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._capacityPool = config.capacityPool;
    this._clientId = config.clientId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._netappAccount = config.netappAccount;
    this._protocolTypes = config.protocolTypes;
    this._resourceGroups = config.resourceGroups;
    this._serviceLevel = config.serviceLevel;
    this._size = config.size;
    this._sizeUnit = config.sizeUnit;
    this._subnet = config.subnet;
    this._subscription = config.subscription;
    this._virtualNetwork = config.virtualNetwork;
    this._volumePath = config.volumePath;
    this._workingEnvironmentName = config.workingEnvironmentName;
    this._exportPolicy.internalValue = config.exportPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // capacity_pool - computed: false, optional: false, required: true
  private _capacityPool?: string; 
  public get capacityPool() {
    return this.getStringAttribute('capacity_pool');
  }
  public set capacityPool(value: string) {
    this._capacityPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolInput() {
    return this._capacityPool;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // netapp_account - computed: false, optional: false, required: true
  private _netappAccount?: string; 
  public get netappAccount() {
    return this.getStringAttribute('netapp_account');
  }
  public set netappAccount(value: string) {
    this._netappAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netappAccountInput() {
    return this._netappAccount;
  }

  // protocol_types - computed: false, optional: false, required: true
  private _protocolTypes?: string[]; 
  public get protocolTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_types'));
  }
  public set protocolTypes(value: string[]) {
    this._protocolTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypesInput() {
    return this._protocolTypes;
  }

  // resource_groups - computed: false, optional: false, required: true
  private _resourceGroups?: string; 
  public get resourceGroups() {
    return this.getStringAttribute('resource_groups');
  }
  public set resourceGroups(value: string) {
    this._resourceGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: false, optional: false, required: true
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork?: string; 
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }
  public set virtualNetwork(value: string) {
    this._virtualNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }

  // working_environment_name - computed: false, optional: false, required: true
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy = new AnfVolumeExportPolicyList(this, "export_policy", false);
  public get exportPolicy() {
    return this._exportPolicy;
  }
  public putExportPolicy(value: AnfVolumeExportPolicy[] | cdktf.IResolvable) {
    this._exportPolicy.internalValue = value;
  }
  public resetExportPolicy() {
    this._exportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      capacity_pool: cdktf.stringToTerraform(this._capacityPool),
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      netapp_account: cdktf.stringToTerraform(this._netappAccount),
      protocol_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolTypes),
      resource_groups: cdktf.stringToTerraform(this._resourceGroups),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      size: cdktf.numberToTerraform(this._size),
      size_unit: cdktf.stringToTerraform(this._sizeUnit),
      subnet: cdktf.stringToTerraform(this._subnet),
      subscription: cdktf.stringToTerraform(this._subscription),
      virtual_network: cdktf.stringToTerraform(this._virtualNetwork),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
      export_policy: cdktf.listMapper(anfVolumeExportPolicyToTerraform, true)(this._exportPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_pool: {
        value: cdktf.stringToHclTerraform(this._capacityPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      netapp_account: {
        value: cdktf.stringToHclTerraform(this._netappAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_groups: {
        value: cdktf.stringToHclTerraform(this._resourceGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktf.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_unit: {
        value: cdktf.stringToHclTerraform(this._sizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription: {
        value: cdktf.stringToHclTerraform(this._subscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network: {
        value: cdktf.stringToHclTerraform(this._virtualNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_path: {
        value: cdktf.stringToHclTerraform(this._volumePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy: {
        value: cdktf.listMapperHcl(anfVolumeExportPolicyToHclTerraform, true)(this._exportPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnfVolumeExportPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
