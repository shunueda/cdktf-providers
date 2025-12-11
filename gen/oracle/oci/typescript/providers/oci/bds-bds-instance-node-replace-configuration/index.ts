// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceNodeReplaceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#bds_instance_id BdsBdsInstanceNodeReplaceConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#cluster_admin_password BdsBdsInstanceNodeReplaceConfiguration#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#display_name BdsBdsInstanceNodeReplaceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#duration_in_minutes BdsBdsInstanceNodeReplaceConfiguration#duration_in_minutes}
  */
  readonly durationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#id BdsBdsInstanceNodeReplaceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#metric_type BdsBdsInstanceNodeReplaceConfiguration#metric_type}
  */
  readonly metricType: string;
  /**
  * level_type_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#level_type_details BdsBdsInstanceNodeReplaceConfiguration#level_type_details}
  */
  readonly levelTypeDetails: BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#timeouts BdsBdsInstanceNodeReplaceConfiguration#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceNodeReplaceConfigurationTimeouts;
}
export interface BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#level_type BdsBdsInstanceNodeReplaceConfiguration#level_type}
  */
  readonly levelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#node_host_name BdsBdsInstanceNodeReplaceConfiguration#node_host_name}
  */
  readonly nodeHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#node_type BdsBdsInstanceNodeReplaceConfiguration#node_type}
  */
  readonly nodeType?: string;
}

export function bdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToTerraform(struct?: BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference | BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_type: cdktf.stringToTerraform(struct!.levelType),
    node_host_name: cdktf.stringToTerraform(struct!.nodeHostName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
  }
}


export function bdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToHclTerraform(struct?: BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference | BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_type: {
      value: cdktf.stringToHclTerraform(struct!.levelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_host_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelType = this._levelType;
    }
    if (this._nodeHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeHostName = this._nodeHostName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._levelType = undefined;
      this._nodeHostName = undefined;
      this._nodeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._levelType = value.levelType;
      this._nodeHostName = value.nodeHostName;
      this._nodeType = value.nodeType;
    }
  }

  // level_type - computed: false, optional: false, required: true
  private _levelType?: string; 
  public get levelType() {
    return this.getStringAttribute('level_type');
  }
  public set levelType(value: string) {
    this._levelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTypeInput() {
    return this._levelType;
  }

  // node_host_name - computed: true, optional: true, required: false
  private _nodeHostName?: string; 
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }
  public set nodeHostName(value: string) {
    this._nodeHostName = value;
  }
  public resetNodeHostName() {
    this._nodeHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeHostNameInput() {
    return this._nodeHostName;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}
export interface BdsBdsInstanceNodeReplaceConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#create BdsBdsInstanceNodeReplaceConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#delete BdsBdsInstanceNodeReplaceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#update BdsBdsInstanceNodeReplaceConfiguration#update}
  */
  readonly update?: string;
}

export function bdsBdsInstanceNodeReplaceConfigurationTimeoutsToTerraform(struct?: BdsBdsInstanceNodeReplaceConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bdsBdsInstanceNodeReplaceConfigurationTimeoutsToHclTerraform(struct?: BdsBdsInstanceNodeReplaceConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceNodeReplaceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceNodeReplaceConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceNodeReplaceConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration oci_bds_bds_instance_node_replace_configuration}
*/
export class BdsBdsInstanceNodeReplaceConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_node_replace_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceNodeReplaceConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceNodeReplaceConfiguration to import
  * @param importFromId The id of the existing BdsBdsInstanceNodeReplaceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceNodeReplaceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_node_replace_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_instance_node_replace_configuration oci_bds_bds_instance_node_replace_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceNodeReplaceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceNodeReplaceConfigurationConfig) {
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
    this._clusterAdminPassword = config.clusterAdminPassword;
    this._displayName = config.displayName;
    this._durationInMinutes = config.durationInMinutes;
    this._id = config.id;
    this._metricType = config.metricType;
    this._levelTypeDetails.internalValue = config.levelTypeDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // cluster_admin_password - computed: false, optional: false, required: true
  private _clusterAdminPassword?: string; 
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }
  public set clusterAdminPassword(value: string) {
    this._clusterAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminPasswordInput() {
    return this._clusterAdminPassword;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // duration_in_minutes - computed: false, optional: false, required: true
  private _durationInMinutes?: number; 
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // level_type_details - computed: false, optional: false, required: true
  private _levelTypeDetails = new BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsOutputReference(this, "level_type_details");
  public get levelTypeDetails() {
    return this._levelTypeDetails;
  }
  public putLevelTypeDetails(value: BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetails) {
    this._levelTypeDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTypeDetailsInput() {
    return this._levelTypeDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceNodeReplaceConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceNodeReplaceConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      cluster_admin_password: cdktf.stringToTerraform(this._clusterAdminPassword),
      display_name: cdktf.stringToTerraform(this._displayName),
      duration_in_minutes: cdktf.numberToTerraform(this._durationInMinutes),
      id: cdktf.stringToTerraform(this._id),
      metric_type: cdktf.stringToTerraform(this._metricType),
      level_type_details: bdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToTerraform(this._levelTypeDetails.internalValue),
      timeouts: bdsBdsInstanceNodeReplaceConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_admin_password: {
        value: cdktf.stringToHclTerraform(this._clusterAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._durationInMinutes),
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
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level_type_details: {
        value: bdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsToHclTerraform(this._levelTypeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsInstanceNodeReplaceConfigurationLevelTypeDetailsList",
      },
      timeouts: {
        value: bdsBdsInstanceNodeReplaceConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceNodeReplaceConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
