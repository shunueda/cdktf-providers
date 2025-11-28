// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrManageReplicationOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#description TcrManageReplicationOperation#description}
  */
  readonly description?: string;
  /**
  * the region ID of the target instance, such as Guangzhou is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#destination_region_id TcrManageReplicationOperation#destination_region_id}
  */
  readonly destinationRegionId?: number;
  /**
  * copy destination instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#destination_registry_id TcrManageReplicationOperation#destination_registry_id}
  */
  readonly destinationRegistryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#id TcrManageReplicationOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * copy source instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#source_registry_id TcrManageReplicationOperation#source_registry_id}
  */
  readonly sourceRegistryId: string;
  /**
  * peer_replication_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#peer_replication_option TcrManageReplicationOperation#peer_replication_option}
  */
  readonly peerReplicationOption?: TcrManageReplicationOperationPeerReplicationOption;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#rule TcrManageReplicationOperation#rule}
  */
  readonly rule: TcrManageReplicationOperationRule;
}
export interface TcrManageReplicationOperationPeerReplicationOption {
  /**
  * whether to enable cross-master account instance synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#enable_peer_replication TcrManageReplicationOperation#enable_peer_replication}
  */
  readonly enablePeerReplication: boolean | cdktf.IResolvable;
  /**
  * access permanent token of the instance to be synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#peer_registry_token TcrManageReplicationOperation#peer_registry_token}
  */
  readonly peerRegistryToken: string;
  /**
  * uin of the instance to be synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#peer_registry_uin TcrManageReplicationOperation#peer_registry_uin}
  */
  readonly peerRegistryUin: string;
}

export function tcrManageReplicationOperationPeerReplicationOptionToTerraform(struct?: TcrManageReplicationOperationPeerReplicationOptionOutputReference | TcrManageReplicationOperationPeerReplicationOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_peer_replication: cdktf.booleanToTerraform(struct!.enablePeerReplication),
    peer_registry_token: cdktf.stringToTerraform(struct!.peerRegistryToken),
    peer_registry_uin: cdktf.stringToTerraform(struct!.peerRegistryUin),
  }
}


export function tcrManageReplicationOperationPeerReplicationOptionToHclTerraform(struct?: TcrManageReplicationOperationPeerReplicationOptionOutputReference | TcrManageReplicationOperationPeerReplicationOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_peer_replication: {
      value: cdktf.booleanToHclTerraform(struct!.enablePeerReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_registry_token: {
      value: cdktf.stringToHclTerraform(struct!.peerRegistryToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_registry_uin: {
      value: cdktf.stringToHclTerraform(struct!.peerRegistryUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrManageReplicationOperationPeerReplicationOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrManageReplicationOperationPeerReplicationOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePeerReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeerReplication = this._enablePeerReplication;
    }
    if (this._peerRegistryToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRegistryToken = this._peerRegistryToken;
    }
    if (this._peerRegistryUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRegistryUin = this._peerRegistryUin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrManageReplicationOperationPeerReplicationOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePeerReplication = undefined;
      this._peerRegistryToken = undefined;
      this._peerRegistryUin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePeerReplication = value.enablePeerReplication;
      this._peerRegistryToken = value.peerRegistryToken;
      this._peerRegistryUin = value.peerRegistryUin;
    }
  }

  // enable_peer_replication - computed: false, optional: false, required: true
  private _enablePeerReplication?: boolean | cdktf.IResolvable; 
  public get enablePeerReplication() {
    return this.getBooleanAttribute('enable_peer_replication');
  }
  public set enablePeerReplication(value: boolean | cdktf.IResolvable) {
    this._enablePeerReplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeerReplicationInput() {
    return this._enablePeerReplication;
  }

  // peer_registry_token - computed: false, optional: false, required: true
  private _peerRegistryToken?: string; 
  public get peerRegistryToken() {
    return this.getStringAttribute('peer_registry_token');
  }
  public set peerRegistryToken(value: string) {
    this._peerRegistryToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegistryTokenInput() {
    return this._peerRegistryToken;
  }

  // peer_registry_uin - computed: false, optional: false, required: true
  private _peerRegistryUin?: string; 
  public get peerRegistryUin() {
    return this.getStringAttribute('peer_registry_uin');
  }
  public set peerRegistryUin(value: string) {
    this._peerRegistryUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegistryUinInput() {
    return this._peerRegistryUin;
  }
}
export interface TcrManageReplicationOperationRuleFilters {
  /**
  * type (name, tag, and resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#type TcrManageReplicationOperation#type}
  */
  readonly type: string;
  /**
  * empty by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#value TcrManageReplicationOperation#value}
  */
  readonly value?: string;
}

export function tcrManageReplicationOperationRuleFiltersToTerraform(struct?: TcrManageReplicationOperationRuleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tcrManageReplicationOperationRuleFiltersToHclTerraform(struct?: TcrManageReplicationOperationRuleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrManageReplicationOperationRuleFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcrManageReplicationOperationRuleFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrManageReplicationOperationRuleFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TcrManageReplicationOperationRuleFiltersList extends cdktf.ComplexList {
  public internalValue? : TcrManageReplicationOperationRuleFilters[] | cdktf.IResolvable

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
  public get(index: number): TcrManageReplicationOperationRuleFiltersOutputReference {
    return new TcrManageReplicationOperationRuleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcrManageReplicationOperationRule {
  /**
  * target namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#dest_namespace TcrManageReplicationOperation#dest_namespace}
  */
  readonly destNamespace: string;
  /**
  * synchronization rule names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#name TcrManageReplicationOperation#name}
  */
  readonly name: string;
  /**
  * whether to cover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#override TcrManageReplicationOperation#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#filters TcrManageReplicationOperation#filters}
  */
  readonly filters: TcrManageReplicationOperationRuleFilters[] | cdktf.IResolvable;
}

export function tcrManageReplicationOperationRuleToTerraform(struct?: TcrManageReplicationOperationRuleOutputReference | TcrManageReplicationOperationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_namespace: cdktf.stringToTerraform(struct!.destNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    filters: cdktf.listMapper(tcrManageReplicationOperationRuleFiltersToTerraform, true)(struct!.filters),
  }
}


export function tcrManageReplicationOperationRuleToHclTerraform(struct?: TcrManageReplicationOperationRuleOutputReference | TcrManageReplicationOperationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_namespace: {
      value: cdktf.stringToHclTerraform(struct!.destNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(tcrManageReplicationOperationRuleFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "TcrManageReplicationOperationRuleFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrManageReplicationOperationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrManageReplicationOperationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.destNamespace = this._destNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrManageReplicationOperationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destNamespace = undefined;
      this._name = undefined;
      this._override = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destNamespace = value.destNamespace;
      this._name = value.name;
      this._override = value.override;
      this._filters.internalValue = value.filters;
    }
  }

  // dest_namespace - computed: false, optional: false, required: true
  private _destNamespace?: string; 
  public get destNamespace() {
    return this.getStringAttribute('dest_namespace');
  }
  public set destNamespace(value: string) {
    this._destNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destNamespaceInput() {
    return this._destNamespace;
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

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new TcrManageReplicationOperationRuleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: TcrManageReplicationOperationRuleFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation tencentcloud_tcr_manage_replication_operation}
*/
export class TcrManageReplicationOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_manage_replication_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrManageReplicationOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrManageReplicationOperation to import
  * @param importFromId The id of the existing TcrManageReplicationOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrManageReplicationOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_manage_replication_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcr_manage_replication_operation tencentcloud_tcr_manage_replication_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrManageReplicationOperationConfig
  */
  public constructor(scope: Construct, id: string, config: TcrManageReplicationOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_manage_replication_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationRegionId = config.destinationRegionId;
    this._destinationRegistryId = config.destinationRegistryId;
    this._id = config.id;
    this._sourceRegistryId = config.sourceRegistryId;
    this._peerReplicationOption.internalValue = config.peerReplicationOption;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_region_id - computed: false, optional: true, required: false
  private _destinationRegionId?: number; 
  public get destinationRegionId() {
    return this.getNumberAttribute('destination_region_id');
  }
  public set destinationRegionId(value: number) {
    this._destinationRegionId = value;
  }
  public resetDestinationRegionId() {
    this._destinationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionIdInput() {
    return this._destinationRegionId;
  }

  // destination_registry_id - computed: false, optional: false, required: true
  private _destinationRegistryId?: string; 
  public get destinationRegistryId() {
    return this.getStringAttribute('destination_registry_id');
  }
  public set destinationRegistryId(value: string) {
    this._destinationRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegistryIdInput() {
    return this._destinationRegistryId;
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

  // source_registry_id - computed: false, optional: false, required: true
  private _sourceRegistryId?: string; 
  public get sourceRegistryId() {
    return this.getStringAttribute('source_registry_id');
  }
  public set sourceRegistryId(value: string) {
    this._sourceRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegistryIdInput() {
    return this._sourceRegistryId;
  }

  // peer_replication_option - computed: false, optional: true, required: false
  private _peerReplicationOption = new TcrManageReplicationOperationPeerReplicationOptionOutputReference(this, "peer_replication_option");
  public get peerReplicationOption() {
    return this._peerReplicationOption;
  }
  public putPeerReplicationOption(value: TcrManageReplicationOperationPeerReplicationOption) {
    this._peerReplicationOption.internalValue = value;
  }
  public resetPeerReplicationOption() {
    this._peerReplicationOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerReplicationOptionInput() {
    return this._peerReplicationOption.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new TcrManageReplicationOperationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: TcrManageReplicationOperationRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_region_id: cdktf.numberToTerraform(this._destinationRegionId),
      destination_registry_id: cdktf.stringToTerraform(this._destinationRegistryId),
      id: cdktf.stringToTerraform(this._id),
      source_registry_id: cdktf.stringToTerraform(this._sourceRegistryId),
      peer_replication_option: tcrManageReplicationOperationPeerReplicationOptionToTerraform(this._peerReplicationOption.internalValue),
      rule: tcrManageReplicationOperationRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_region_id: {
        value: cdktf.numberToHclTerraform(this._destinationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination_registry_id: {
        value: cdktf.stringToHclTerraform(this._destinationRegistryId),
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
      source_registry_id: {
        value: cdktf.stringToHclTerraform(this._sourceRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_replication_option: {
        value: tcrManageReplicationOperationPeerReplicationOptionToHclTerraform(this._peerReplicationOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrManageReplicationOperationPeerReplicationOptionList",
      },
      rule: {
        value: tcrManageReplicationOperationRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrManageReplicationOperationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
