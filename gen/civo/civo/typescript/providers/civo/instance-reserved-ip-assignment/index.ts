// https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceReservedIpAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#id InstanceReservedIpAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#instance_id InstanceReservedIpAssignment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The region of the ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#region InstanceReservedIpAssignment#region}
  */
  readonly region?: string;
  /**
  * The reserved ip id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#reserved_ip_id InstanceReservedIpAssignment#reserved_ip_id}
  */
  readonly reservedIpId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#timeouts InstanceReservedIpAssignment#timeouts}
  */
  readonly timeouts?: InstanceReservedIpAssignmentTimeouts;
}
export interface InstanceReservedIpAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#create InstanceReservedIpAssignment#create}
  */
  readonly create?: string;
}

export function instanceReservedIpAssignmentTimeoutsToTerraform(struct?: InstanceReservedIpAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function instanceReservedIpAssignmentTimeoutsToHclTerraform(struct?: InstanceReservedIpAssignmentTimeouts | cdktf.IResolvable): any {
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

export class InstanceReservedIpAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceReservedIpAssignmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceReservedIpAssignmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment civo_instance_reserved_ip_assignment}
*/
export class InstanceReservedIpAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "civo_instance_reserved_ip_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceReservedIpAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceReservedIpAssignment to import
  * @param importFromId The id of the existing InstanceReservedIpAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceReservedIpAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "civo_instance_reserved_ip_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/instance_reserved_ip_assignment civo_instance_reserved_ip_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceReservedIpAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceReservedIpAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'civo_instance_reserved_ip_assignment',
      terraformGeneratorMetadata: {
        providerName: 'civo',
        providerVersion: '1.1.7'
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
    this._instanceId = config.instanceId;
    this._region = config.region;
    this._reservedIpId = config.reservedIpId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_ip_id - computed: false, optional: false, required: true
  private _reservedIpId?: string; 
  public get reservedIpId() {
    return this.getStringAttribute('reserved_ip_id');
  }
  public set reservedIpId(value: string) {
    this._reservedIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpIdInput() {
    return this._reservedIpId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceReservedIpAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceReservedIpAssignmentTimeouts) {
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
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
      reserved_ip_id: cdktf.stringToTerraform(this._reservedIpId),
      timeouts: instanceReservedIpAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ip_id: {
        value: cdktf.stringToHclTerraform(this._reservedIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: instanceReservedIpAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceReservedIpAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
