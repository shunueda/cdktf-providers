// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRelationFromBridgeDomainToNetflowMonitorPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter type of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy#filter_type DataAciRelationFromBridgeDomainToNetflowMonitorPolicy#filter_type}
  */
  readonly filterType: string;
  /**
  * The name of the NetFlow Monitor Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy#netflow_monitor_policy_name DataAciRelationFromBridgeDomainToNetflowMonitorPolicy#netflow_monitor_policy_name}
  */
  readonly netflowMonitorPolicyName: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy#parent_dn DataAciRelationFromBridgeDomainToNetflowMonitorPolicy#parent_dn}
  */
  readonly parentDn: string;
}
export interface DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotations {
}

export function dataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsToTerraform(struct?: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsToHclTerraform(struct?: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsOutputReference {
    return new DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTags {
}

export function dataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsToTerraform(struct?: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsToHclTerraform(struct?: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsOutputReference {
    return new DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy aci_relation_from_bridge_domain_to_netflow_monitor_policy}
*/
export class DataAciRelationFromBridgeDomainToNetflowMonitorPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_from_bridge_domain_to_netflow_monitor_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRelationFromBridgeDomainToNetflowMonitorPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRelationFromBridgeDomainToNetflowMonitorPolicy to import
  * @param importFromId The id of the existing DataAciRelationFromBridgeDomainToNetflowMonitorPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRelationFromBridgeDomainToNetflowMonitorPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_from_bridge_domain_to_netflow_monitor_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/relation_from_bridge_domain_to_netflow_monitor_policy aci_relation_from_bridge_domain_to_netflow_monitor_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRelationFromBridgeDomainToNetflowMonitorPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRelationFromBridgeDomainToNetflowMonitorPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_from_bridge_domain_to_netflow_monitor_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterType = config.filterType;
    this._netflowMonitorPolicyName = config.netflowMonitorPolicyName;
    this._parentDn = config.parentDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciRelationFromBridgeDomainToNetflowMonitorPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netflow_monitor_policy_name - computed: false, optional: false, required: true
  private _netflowMonitorPolicyName?: string; 
  public get netflowMonitorPolicyName() {
    return this.getStringAttribute('netflow_monitor_policy_name');
  }
  public set netflowMonitorPolicyName(value: string) {
    this._netflowMonitorPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorPolicyNameInput() {
    return this._netflowMonitorPolicyName;
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciRelationFromBridgeDomainToNetflowMonitorPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_type: cdktf.stringToTerraform(this._filterType),
      netflow_monitor_policy_name: cdktf.stringToTerraform(this._netflowMonitorPolicyName),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_monitor_policy_name: {
        value: cdktf.stringToHclTerraform(this._netflowMonitorPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
