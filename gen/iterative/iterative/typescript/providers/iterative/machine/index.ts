// https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#aws_security_group Machine#aws_security_group}
  */
  readonly awsSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#aws_subnet_id Machine#aws_subnet_id}
  */
  readonly awsSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#cloud Machine#cloud}
  */
  readonly cloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#id Machine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#image Machine#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#instance_gpu Machine#instance_gpu}
  */
  readonly instanceGpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#instance_hdd_size Machine#instance_hdd_size}
  */
  readonly instanceHddSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#instance_permission_set Machine#instance_permission_set}
  */
  readonly instancePermissionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#instance_type Machine#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#kubernetes_node_selector Machine#kubernetes_node_selector}
  */
  readonly kubernetesNodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#metadata Machine#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#name Machine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#region Machine#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#spot Machine#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#spot_price Machine#spot_price}
  */
  readonly spotPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#ssh_private Machine#ssh_private}
  */
  readonly sshPrivate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#startup_script Machine#startup_script}
  */
  readonly startupScript?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#timeouts Machine#timeouts}
  */
  readonly timeouts?: MachineTimeouts;
}
export interface MachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#create Machine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#delete Machine#delete}
  */
  readonly delete?: string;
}

export function machineTimeoutsToTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function machineTimeoutsToHclTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine iterative_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iterative_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iterative_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/iterative/iterative/0.11.20/docs/resources/machine iterative_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MachineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iterative_machine',
      terraformGeneratorMetadata: {
        providerName: 'iterative',
        providerVersion: '0.11.20',
        providerVersionConstraint: '0.11.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsSecurityGroup = config.awsSecurityGroup;
    this._awsSubnetId = config.awsSubnetId;
    this._cloud = config.cloud;
    this._id = config.id;
    this._image = config.image;
    this._instanceGpu = config.instanceGpu;
    this._instanceHddSize = config.instanceHddSize;
    this._instancePermissionSet = config.instancePermissionSet;
    this._instanceType = config.instanceType;
    this._kubernetesNodeSelector = config.kubernetesNodeSelector;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._spot = config.spot;
    this._spotPrice = config.spotPrice;
    this._sshPrivate = config.sshPrivate;
    this._startupScript = config.startupScript;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_security_group - computed: false, optional: true, required: false
  private _awsSecurityGroup?: string; 
  public get awsSecurityGroup() {
    return this.getStringAttribute('aws_security_group');
  }
  public set awsSecurityGroup(value: string) {
    this._awsSecurityGroup = value;
  }
  public resetAwsSecurityGroup() {
    this._awsSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityGroupInput() {
    return this._awsSecurityGroup;
  }

  // aws_subnet_id - computed: false, optional: true, required: false
  private _awsSubnetId?: string; 
  public get awsSubnetId() {
    return this.getStringAttribute('aws_subnet_id');
  }
  public set awsSubnetId(value: string) {
    this._awsSubnetId = value;
  }
  public resetAwsSubnetId() {
    this._awsSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSubnetIdInput() {
    return this._awsSubnetId;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // instance_gpu - computed: false, optional: true, required: false
  private _instanceGpu?: string; 
  public get instanceGpu() {
    return this.getStringAttribute('instance_gpu');
  }
  public set instanceGpu(value: string) {
    this._instanceGpu = value;
  }
  public resetInstanceGpu() {
    this._instanceGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGpuInput() {
    return this._instanceGpu;
  }

  // instance_hdd_size - computed: false, optional: true, required: false
  private _instanceHddSize?: number; 
  public get instanceHddSize() {
    return this.getNumberAttribute('instance_hdd_size');
  }
  public set instanceHddSize(value: number) {
    this._instanceHddSize = value;
  }
  public resetInstanceHddSize() {
    this._instanceHddSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceHddSizeInput() {
    return this._instanceHddSize;
  }

  // instance_ip - computed: true, optional: false, required: false
  public get instanceIp() {
    return this.getStringAttribute('instance_ip');
  }

  // instance_launch_time - computed: true, optional: false, required: false
  public get instanceLaunchTime() {
    return this.getStringAttribute('instance_launch_time');
  }

  // instance_permission_set - computed: false, optional: true, required: false
  private _instancePermissionSet?: string; 
  public get instancePermissionSet() {
    return this.getStringAttribute('instance_permission_set');
  }
  public set instancePermissionSet(value: string) {
    this._instancePermissionSet = value;
  }
  public resetInstancePermissionSet() {
    this._instancePermissionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePermissionSetInput() {
    return this._instancePermissionSet;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kubernetes_node_selector - computed: false, optional: true, required: false
  private _kubernetesNodeSelector?: { [key: string]: string }; 
  public get kubernetesNodeSelector() {
    return this.getStringMapAttribute('kubernetes_node_selector');
  }
  public set kubernetesNodeSelector(value: { [key: string]: string }) {
    this._kubernetesNodeSelector = value;
  }
  public resetKubernetesNodeSelector() {
    this._kubernetesNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNodeSelectorInput() {
    return this._kubernetesNodeSelector;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: true, required: false
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: number; 
  public get spotPrice() {
    return this.getNumberAttribute('spot_price');
  }
  public set spotPrice(value: number) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // ssh_name - computed: true, optional: false, required: false
  public get sshName() {
    return this.getStringAttribute('ssh_name');
  }

  // ssh_private - computed: false, optional: true, required: false
  private _sshPrivate?: string; 
  public get sshPrivate() {
    return this.getStringAttribute('ssh_private');
  }
  public set sshPrivate(value: string) {
    this._sshPrivate = value;
  }
  public resetSshPrivate() {
    this._sshPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateInput() {
    return this._sshPrivate;
  }

  // ssh_public - computed: true, optional: false, required: false
  public get sshPublic() {
    return this.getStringAttribute('ssh_public');
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineTimeouts) {
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
      aws_security_group: cdktf.stringToTerraform(this._awsSecurityGroup),
      aws_subnet_id: cdktf.stringToTerraform(this._awsSubnetId),
      cloud: cdktf.stringToTerraform(this._cloud),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      instance_gpu: cdktf.stringToTerraform(this._instanceGpu),
      instance_hdd_size: cdktf.numberToTerraform(this._instanceHddSize),
      instance_permission_set: cdktf.stringToTerraform(this._instancePermissionSet),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kubernetes_node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._kubernetesNodeSelector),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      spot: cdktf.booleanToTerraform(this._spot),
      spot_price: cdktf.numberToTerraform(this._spotPrice),
      ssh_private: cdktf.stringToTerraform(this._sshPrivate),
      startup_script: cdktf.stringToTerraform(this._startupScript),
      timeouts: machineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_security_group: {
        value: cdktf.stringToHclTerraform(this._awsSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_subnet_id: {
        value: cdktf.stringToHclTerraform(this._awsSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_gpu: {
        value: cdktf.stringToHclTerraform(this._instanceGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_hdd_size: {
        value: cdktf.numberToHclTerraform(this._instanceHddSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_permission_set: {
        value: cdktf.stringToHclTerraform(this._instancePermissionSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_node_selector: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kubernetesNodeSelector),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      spot: {
        value: cdktf.booleanToHclTerraform(this._spot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spot_price: {
        value: cdktf.numberToHclTerraform(this._spotPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_private: {
        value: cdktf.stringToHclTerraform(this._sshPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script: {
        value: cdktf.stringToHclTerraform(this._startupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: machineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
