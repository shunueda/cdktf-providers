// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsInstanceReplaceNodeActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#bds_instance_id BdsBdsInstanceReplaceNodeAction#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#cluster_admin_password BdsBdsInstanceReplaceNodeAction#cluster_admin_password}
  */
  readonly clusterAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#id BdsBdsInstanceReplaceNodeAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#node_backup_id BdsBdsInstanceReplaceNodeAction#node_backup_id}
  */
  readonly nodeBackupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#node_host_name BdsBdsInstanceReplaceNodeAction#node_host_name}
  */
  readonly nodeHostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#shape BdsBdsInstanceReplaceNodeAction#shape}
  */
  readonly shape?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#timeouts BdsBdsInstanceReplaceNodeAction#timeouts}
  */
  readonly timeouts?: BdsBdsInstanceReplaceNodeActionTimeouts;
}
export interface BdsBdsInstanceReplaceNodeActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#create BdsBdsInstanceReplaceNodeAction#create}
  */
  readonly create?: string;
}

export function bdsBdsInstanceReplaceNodeActionTimeoutsToTerraform(struct?: BdsBdsInstanceReplaceNodeActionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function bdsBdsInstanceReplaceNodeActionTimeoutsToHclTerraform(struct?: BdsBdsInstanceReplaceNodeActionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsInstanceReplaceNodeActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsInstanceReplaceNodeActionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsInstanceReplaceNodeActionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action oci_bds_bds_instance_replace_node_action}
*/
export class BdsBdsInstanceReplaceNodeAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_replace_node_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsInstanceReplaceNodeAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsInstanceReplaceNodeAction to import
  * @param importFromId The id of the existing BdsBdsInstanceReplaceNodeAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsInstanceReplaceNodeAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_replace_node_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/bds_bds_instance_replace_node_action oci_bds_bds_instance_replace_node_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsInstanceReplaceNodeActionConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsInstanceReplaceNodeActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_replace_node_action',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._id = config.id;
    this._nodeBackupId = config.nodeBackupId;
    this._nodeHostName = config.nodeHostName;
    this._shape = config.shape;
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

  // node_backup_id - computed: false, optional: false, required: true
  private _nodeBackupId?: string; 
  public get nodeBackupId() {
    return this.getStringAttribute('node_backup_id');
  }
  public set nodeBackupId(value: string) {
    this._nodeBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBackupIdInput() {
    return this._nodeBackupId;
  }

  // node_host_name - computed: false, optional: false, required: true
  private _nodeHostName?: string; 
  public get nodeHostName() {
    return this.getStringAttribute('node_host_name');
  }
  public set nodeHostName(value: string) {
    this._nodeHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeHostNameInput() {
    return this._nodeHostName;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsInstanceReplaceNodeActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsInstanceReplaceNodeActionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      node_backup_id: cdktf.stringToTerraform(this._nodeBackupId),
      node_host_name: cdktf.stringToTerraform(this._nodeHostName),
      shape: cdktf.stringToTerraform(this._shape),
      timeouts: bdsBdsInstanceReplaceNodeActionTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_backup_id: {
        value: cdktf.stringToHclTerraform(this._nodeBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_host_name: {
        value: cdktf.stringToHclTerraform(this._nodeHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: bdsBdsInstanceReplaceNodeActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsInstanceReplaceNodeActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
