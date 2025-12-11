// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceNodeReplaceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration#bds_instance_id DataOciBdsBdsInstanceNodeReplaceConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration#node_replace_configuration_id DataOciBdsBdsInstanceNodeReplaceConfiguration#node_replace_configuration_id}
  */
  readonly nodeReplaceConfigurationId: string;
}
export interface DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails {
}

export function dataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToTerraform(struct?: DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_type - computed: true, optional: false, required: false
  public get levelType() {
    return this.getStringAttribute('level_type');
  }

  // node_host_name - computed: true, optional: false, required: false
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
}

export class DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference {
    return new DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration oci_bds_bds_instance_node_replace_configuration}
*/
export class DataOciBdsBdsInstanceNodeReplaceConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_node_replace_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceNodeReplaceConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceNodeReplaceConfiguration to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceNodeReplaceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceNodeReplaceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_node_replace_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance_node_replace_configuration oci_bds_bds_instance_node_replace_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceNodeReplaceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceNodeReplaceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_node_replace_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._nodeReplaceConfigurationId = config.nodeReplaceConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: true, optional: false, required: false
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level_type_details - computed: true, optional: false, required: false
  private _levelTypeDetails = new DataOciBdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsList(this, "level_type_details", false);
  public get levelTypeDetails() {
    return this._levelTypeDetails;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // node_replace_configuration_id - computed: false, optional: false, required: true
  private _nodeReplaceConfigurationId?: string; 
  public get nodeReplaceConfigurationId() {
    return this.getStringAttribute('node_replace_configuration_id');
  }
  public set nodeReplaceConfigurationId(value: string) {
    this._nodeReplaceConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeReplaceConfigurationIdInput() {
    return this._nodeReplaceConfigurationId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      node_replace_configuration_id: cdktf.stringToTerraform(this._nodeReplaceConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_replace_configuration_id: {
        value: cdktf.stringToHclTerraform(this._nodeReplaceConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
