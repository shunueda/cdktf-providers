// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagementStationMirrorSynchronizeManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#id OsManagementHubManagementStationMirrorSynchronizeManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#management_station_id OsManagementHubManagementStationMirrorSynchronizeManagement#management_station_id}
  */
  readonly managementStationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#mirror_id OsManagementHubManagementStationMirrorSynchronizeManagement#mirror_id}
  */
  readonly mirrorId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#timeouts OsManagementHubManagementStationMirrorSynchronizeManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts;
}
export interface OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#create OsManagementHubManagementStationMirrorSynchronizeManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#delete OsManagementHubManagementStationMirrorSynchronizeManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#update OsManagementHubManagementStationMirrorSynchronizeManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubManagementStationMirrorSynchronizeManagementTimeoutsToTerraform(struct?: OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubManagementStationMirrorSynchronizeManagementTimeoutsToHclTerraform(struct?: OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management oci_os_management_hub_management_station_mirror_synchronize_management}
*/
export class OsManagementHubManagementStationMirrorSynchronizeManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_management_station_mirror_synchronize_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagementStationMirrorSynchronizeManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagementStationMirrorSynchronizeManagement to import
  * @param importFromId The id of the existing OsManagementHubManagementStationMirrorSynchronizeManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagementStationMirrorSynchronizeManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_management_station_mirror_synchronize_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management oci_os_management_hub_management_station_mirror_synchronize_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagementStationMirrorSynchronizeManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagementStationMirrorSynchronizeManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_management_station_mirror_synchronize_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._managementStationId = config.managementStationId;
    this._mirrorId = config.mirrorId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // management_station_id - computed: false, optional: false, required: true
  private _managementStationId?: string; 
  public get managementStationId() {
    return this.getStringAttribute('management_station_id');
  }
  public set managementStationId(value: string) {
    this._managementStationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStationIdInput() {
    return this._managementStationId;
  }

  // mirror_id - computed: false, optional: false, required: true
  private _mirrorId?: string; 
  public get mirrorId() {
    return this.getStringAttribute('mirror_id');
  }
  public set mirrorId(value: string) {
    this._mirrorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIdInput() {
    return this._mirrorId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      management_station_id: cdktf.stringToTerraform(this._managementStationId),
      mirror_id: cdktf.stringToTerraform(this._mirrorId),
      timeouts: osManagementHubManagementStationMirrorSynchronizeManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_station_id: {
        value: cdktf.stringToHclTerraform(this._managementStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_id: {
        value: cdktf.stringToHclTerraform(this._mirrorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: osManagementHubManagementStationMirrorSynchronizeManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
