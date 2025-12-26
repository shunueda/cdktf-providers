// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#description TcrReplication#description}
  */
  readonly description?: string;
  /**
  * Region ID of the destination instance. For example, `1` represents Guangzhou.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#destination_region_id TcrReplication#destination_region_id}
  */
  readonly destinationRegionId?: number;
  /**
  * Destination instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#destination_registry_id TcrReplication#destination_registry_id}
  */
  readonly destinationRegistryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#id TcrReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Source instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#source_registry_id TcrReplication#source_registry_id}
  */
  readonly sourceRegistryId: string;
  /**
  * peer_replication_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#peer_replication_option TcrReplication#peer_replication_option}
  */
  readonly peerReplicationOption?: TcrReplicationPeerReplicationOption;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#rule TcrReplication#rule}
  */
  readonly rule: TcrReplicationRule;
}
export interface TcrReplicationPeerReplicationOption {
  /**
  * Whether to enable cross-account synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#enable_peer_replication TcrReplication#enable_peer_replication}
  */
  readonly enablePeerReplication: boolean | cdktf.IResolvable;
  /**
  * Permanent access Token for the destination instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#peer_registry_token TcrReplication#peer_registry_token}
  */
  readonly peerRegistryToken: string;
  /**
  * UIN of the destination instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#peer_registry_uin TcrReplication#peer_registry_uin}
  */
  readonly peerRegistryUin: string;
}

export function tcrReplicationPeerReplicationOptionToTerraform(struct?: TcrReplicationPeerReplicationOptionOutputReference | TcrReplicationPeerReplicationOption): any {
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


export function tcrReplicationPeerReplicationOptionToHclTerraform(struct?: TcrReplicationPeerReplicationOptionOutputReference | TcrReplicationPeerReplicationOption): any {
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

export class TcrReplicationPeerReplicationOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrReplicationPeerReplicationOption | undefined {
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

  public set internalValue(value: TcrReplicationPeerReplicationOption | undefined) {
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
export interface TcrReplicationRuleFilters {
  /**
  * Type (`name`, `tag` and `resource`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#type TcrReplication#type}
  */
  readonly type: string;
  /**
  * It is left blank by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#value TcrReplication#value}
  */
  readonly value?: string;
}

export function tcrReplicationRuleFiltersToTerraform(struct?: TcrReplicationRuleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tcrReplicationRuleFiltersToHclTerraform(struct?: TcrReplicationRuleFilters | cdktf.IResolvable): any {
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

export class TcrReplicationRuleFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcrReplicationRuleFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TcrReplicationRuleFilters | cdktf.IResolvable | undefined) {
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

export class TcrReplicationRuleFiltersList extends cdktf.ComplexList {
  public internalValue? : TcrReplicationRuleFilters[] | cdktf.IResolvable

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
  public get(index: number): TcrReplicationRuleFiltersOutputReference {
    return new TcrReplicationRuleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcrReplicationRule {
  /**
  * Whether synchronous deletion event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#deletion TcrReplication#deletion}
  */
  readonly deletion?: boolean | cdktf.IResolvable;
  /**
  * Destination namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#dest_namespace TcrReplication#dest_namespace}
  */
  readonly destNamespace: string;
  /**
  * Name of synchronization rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#name TcrReplication#name}
  */
  readonly name: string;
  /**
  * Whether to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#override TcrReplication#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#filters TcrReplication#filters}
  */
  readonly filters: TcrReplicationRuleFilters[] | cdktf.IResolvable;
}

export function tcrReplicationRuleToTerraform(struct?: TcrReplicationRuleOutputReference | TcrReplicationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion: cdktf.booleanToTerraform(struct!.deletion),
    dest_namespace: cdktf.stringToTerraform(struct!.destNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    filters: cdktf.listMapper(tcrReplicationRuleFiltersToTerraform, true)(struct!.filters),
  }
}


export function tcrReplicationRuleToHclTerraform(struct?: TcrReplicationRuleOutputReference | TcrReplicationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion: {
      value: cdktf.booleanToHclTerraform(struct!.deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
      value: cdktf.listMapperHcl(tcrReplicationRuleFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "TcrReplicationRuleFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrReplicationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrReplicationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
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

  public set internalValue(value: TcrReplicationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deletion = undefined;
      this._destNamespace = undefined;
      this._name = undefined;
      this._override = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deletion = value.deletion;
      this._destNamespace = value.destNamespace;
      this._name = value.name;
      this._override = value.override;
      this._filters.internalValue = value.filters;
    }
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: boolean | cdktf.IResolvable; 
  public get deletion() {
    return this.getBooleanAttribute('deletion');
  }
  public set deletion(value: boolean | cdktf.IResolvable) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
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
  private _filters = new TcrReplicationRuleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: TcrReplicationRuleFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication tencentcloud_tcr_replication}
*/
export class TcrReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrReplication to import
  * @param importFromId The id of the existing TcrReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcr_replication tencentcloud_tcr_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: TcrReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_replication',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
  private _peerReplicationOption = new TcrReplicationPeerReplicationOptionOutputReference(this, "peer_replication_option");
  public get peerReplicationOption() {
    return this._peerReplicationOption;
  }
  public putPeerReplicationOption(value: TcrReplicationPeerReplicationOption) {
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
  private _rule = new TcrReplicationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: TcrReplicationRule) {
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
      peer_replication_option: tcrReplicationPeerReplicationOptionToTerraform(this._peerReplicationOption.internalValue),
      rule: tcrReplicationRuleToTerraform(this._rule.internalValue),
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
        value: tcrReplicationPeerReplicationOptionToHclTerraform(this._peerReplicationOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrReplicationPeerReplicationOptionList",
      },
      rule: {
        value: tcrReplicationRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrReplicationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
