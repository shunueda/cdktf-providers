// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdrsProtectiongroupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}
  */
  readonly drType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#enable SdrsProtectiongroupV1#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}
  */
  readonly sourceAvailabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}
  */
  readonly sourceVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}
  */
  readonly targetAvailabilityZone: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#timeouts SdrsProtectiongroupV1#timeouts}
  */
  readonly timeouts?: SdrsProtectiongroupV1Timeouts;
}
export interface SdrsProtectiongroupV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#create SdrsProtectiongroupV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#delete SdrsProtectiongroupV1#delete}
  */
  readonly delete?: string;
}

export function sdrsProtectiongroupV1TimeoutsToTerraform(struct?: SdrsProtectiongroupV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sdrsProtectiongroupV1TimeoutsToHclTerraform(struct?: SdrsProtectiongroupV1Timeouts | cdktf.IResolvable): any {
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

export class SdrsProtectiongroupV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdrsProtectiongroupV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SdrsProtectiongroupV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1 flexibleengine_sdrs_protectiongroup_v1}
*/
export class SdrsProtectiongroupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_sdrs_protectiongroup_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdrsProtectiongroupV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdrsProtectiongroupV1 to import
  * @param importFromId The id of the existing SdrsProtectiongroupV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdrsProtectiongroupV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_sdrs_protectiongroup_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/sdrs_protectiongroup_v1 flexibleengine_sdrs_protectiongroup_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdrsProtectiongroupV1Config
  */
  public constructor(scope: Construct, id: string, config: SdrsProtectiongroupV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_sdrs_protectiongroup_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._domainId = config.domainId;
    this._drType = config.drType;
    this._enable = config.enable;
    this._id = config.id;
    this._name = config.name;
    this._sourceAvailabilityZone = config.sourceAvailabilityZone;
    this._sourceVpcId = config.sourceVpcId;
    this._targetAvailabilityZone = config.targetAvailabilityZone;
    this._timeouts.internalValue = config.timeouts;
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

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // dr_type - computed: false, optional: true, required: false
  private _drType?: string; 
  public get drType() {
    return this.getStringAttribute('dr_type');
  }
  public set drType(value: string) {
    this._drType = value;
  }
  public resetDrType() {
    this._drType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drTypeInput() {
    return this._drType;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // source_availability_zone - computed: false, optional: false, required: true
  private _sourceAvailabilityZone?: string; 
  public get sourceAvailabilityZone() {
    return this.getStringAttribute('source_availability_zone');
  }
  public set sourceAvailabilityZone(value: string) {
    this._sourceAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAvailabilityZoneInput() {
    return this._sourceAvailabilityZone;
  }

  // source_vpc_id - computed: false, optional: false, required: true
  private _sourceVpcId?: string; 
  public get sourceVpcId() {
    return this.getStringAttribute('source_vpc_id');
  }
  public set sourceVpcId(value: string) {
    this._sourceVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcIdInput() {
    return this._sourceVpcId;
  }

  // target_availability_zone - computed: false, optional: false, required: true
  private _targetAvailabilityZone?: string; 
  public get targetAvailabilityZone() {
    return this.getStringAttribute('target_availability_zone');
  }
  public set targetAvailabilityZone(value: string) {
    this._targetAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilityZoneInput() {
    return this._targetAvailabilityZone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SdrsProtectiongroupV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SdrsProtectiongroupV1Timeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.stringToTerraform(this._domainId),
      dr_type: cdktf.stringToTerraform(this._drType),
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_availability_zone: cdktf.stringToTerraform(this._sourceAvailabilityZone),
      source_vpc_id: cdktf.stringToTerraform(this._sourceVpcId),
      target_availability_zone: cdktf.stringToTerraform(this._targetAvailabilityZone),
      timeouts: sdrsProtectiongroupV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_type: {
        value: cdktf.stringToHclTerraform(this._drType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      source_availability_zone: {
        value: cdktf.stringToHclTerraform(this._sourceAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vpc_id: {
        value: cdktf.stringToHclTerraform(this._sourceVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_availability_zone: {
        value: cdktf.stringToHclTerraform(this._targetAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sdrsProtectiongroupV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdrsProtectiongroupV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
