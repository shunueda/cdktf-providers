// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsTurboShareV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#availability_zone SfsTurboShareV1#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#crypt_key_id SfsTurboShareV1#crypt_key_id}
  */
  readonly cryptKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#enhanced SfsTurboShareV1#enhanced}
  */
  readonly enhanced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#expand_type SfsTurboShareV1#expand_type}
  */
  readonly expandType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#hpc_bw SfsTurboShareV1#hpc_bw}
  */
  readonly hpcBw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#id SfsTurboShareV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#name SfsTurboShareV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#region SfsTurboShareV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#security_group_id SfsTurboShareV1#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#share_proto SfsTurboShareV1#share_proto}
  */
  readonly shareProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#share_type SfsTurboShareV1#share_type}
  */
  readonly shareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#size SfsTurboShareV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#subnet_id SfsTurboShareV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#vpc_id SfsTurboShareV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#timeouts SfsTurboShareV1#timeouts}
  */
  readonly timeouts?: SfsTurboShareV1Timeouts;
}
export interface SfsTurboShareV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#create SfsTurboShareV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#delete SfsTurboShareV1#delete}
  */
  readonly delete?: string;
}

export function sfsTurboShareV1TimeoutsToTerraform(struct?: SfsTurboShareV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sfsTurboShareV1TimeoutsToHclTerraform(struct?: SfsTurboShareV1Timeouts | cdktf.IResolvable): any {
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

export class SfsTurboShareV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SfsTurboShareV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SfsTurboShareV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1 opentelekomcloud_sfs_turbo_share_v1}
*/
export class SfsTurboShareV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_sfs_turbo_share_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfsTurboShareV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfsTurboShareV1 to import
  * @param importFromId The id of the existing SfsTurboShareV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfsTurboShareV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_sfs_turbo_share_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/sfs_turbo_share_v1 opentelekomcloud_sfs_turbo_share_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsTurboShareV1Config
  */
  public constructor(scope: Construct, id: string, config: SfsTurboShareV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_sfs_turbo_share_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._cryptKeyId = config.cryptKeyId;
    this._enhanced = config.enhanced;
    this._expandType = config.expandType;
    this._hpcBw = config.hpcBw;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._shareProto = config.shareProto;
    this._shareType = config.shareType;
    this._size = config.size;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // available_capacity - computed: true, optional: false, required: false
  public get availableCapacity() {
    return this.getStringAttribute('available_capacity');
  }

  // crypt_key_id - computed: false, optional: true, required: false
  private _cryptKeyId?: string; 
  public get cryptKeyId() {
    return this.getStringAttribute('crypt_key_id');
  }
  public set cryptKeyId(value: string) {
    this._cryptKeyId = value;
  }
  public resetCryptKeyId() {
    this._cryptKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptKeyIdInput() {
    return this._cryptKeyId;
  }

  // enhanced - computed: true, optional: true, required: false
  private _enhanced?: boolean | cdktf.IResolvable; 
  public get enhanced() {
    return this.getBooleanAttribute('enhanced');
  }
  public set enhanced(value: boolean | cdktf.IResolvable) {
    this._enhanced = value;
  }
  public resetEnhanced() {
    this._enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedInput() {
    return this._enhanced;
  }

  // expand_type - computed: true, optional: true, required: false
  private _expandType?: string; 
  public get expandType() {
    return this.getStringAttribute('expand_type');
  }
  public set expandType(value: string) {
    this._expandType = value;
  }
  public resetExpandType() {
    this._expandType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandTypeInput() {
    return this._expandType;
  }

  // export_location - computed: true, optional: false, required: false
  public get exportLocation() {
    return this.getStringAttribute('export_location');
  }

  // hpc_bw - computed: true, optional: true, required: false
  private _hpcBw?: string; 
  public get hpcBw() {
    return this.getStringAttribute('hpc_bw');
  }
  public set hpcBw(value: string) {
    this._hpcBw = value;
  }
  public resetHpcBw() {
    this._hpcBw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcBwInput() {
    return this._hpcBw;
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // share_proto - computed: false, optional: true, required: false
  private _shareProto?: string; 
  public get shareProto() {
    return this.getStringAttribute('share_proto');
  }
  public set shareProto(value: string) {
    this._shareProto = value;
  }
  public resetShareProto() {
    this._shareProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProtoInput() {
    return this._shareProto;
  }

  // share_type - computed: false, optional: true, required: false
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SfsTurboShareV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SfsTurboShareV1Timeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      crypt_key_id: cdktf.stringToTerraform(this._cryptKeyId),
      enhanced: cdktf.booleanToTerraform(this._enhanced),
      expand_type: cdktf.stringToTerraform(this._expandType),
      hpc_bw: cdktf.stringToTerraform(this._hpcBw),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      share_proto: cdktf.stringToTerraform(this._shareProto),
      share_type: cdktf.stringToTerraform(this._shareType),
      size: cdktf.numberToTerraform(this._size),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: sfsTurboShareV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypt_key_id: {
        value: cdktf.stringToHclTerraform(this._cryptKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced: {
        value: cdktf.booleanToHclTerraform(this._enhanced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_type: {
        value: cdktf.stringToHclTerraform(this._expandType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hpc_bw: {
        value: cdktf.stringToHclTerraform(this._hpcBw),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_proto: {
        value: cdktf.stringToHclTerraform(this._shareProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_type: {
        value: cdktf.stringToHclTerraform(this._shareType),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sfsTurboShareV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SfsTurboShareV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
