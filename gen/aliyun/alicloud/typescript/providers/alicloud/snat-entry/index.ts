// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnatEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#eip_affinity SnatEntry#eip_affinity}
  */
  readonly eipAffinity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#id SnatEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#snat_entry_name SnatEntry#snat_entry_name}
  */
  readonly snatEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#snat_ip SnatEntry#snat_ip}
  */
  readonly snatIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#snat_table_id SnatEntry#snat_table_id}
  */
  readonly snatTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#source_cidr SnatEntry#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#source_vswitch_id SnatEntry#source_vswitch_id}
  */
  readonly sourceVswitchId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#timeouts SnatEntry#timeouts}
  */
  readonly timeouts?: SnatEntryTimeouts;
}
export interface SnatEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#create SnatEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#delete SnatEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#update SnatEntry#update}
  */
  readonly update?: string;
}

export function snatEntryTimeoutsToTerraform(struct?: SnatEntryTimeouts | cdktf.IResolvable): any {
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


export function snatEntryTimeoutsToHclTerraform(struct?: SnatEntryTimeouts | cdktf.IResolvable): any {
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

export class SnatEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnatEntryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnatEntryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry alicloud_snat_entry}
*/
export class SnatEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_snat_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnatEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnatEntry to import
  * @param importFromId The id of the existing SnatEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnatEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_snat_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/snat_entry alicloud_snat_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnatEntryConfig
  */
  public constructor(scope: Construct, id: string, config: SnatEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_snat_entry',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipAffinity = config.eipAffinity;
    this._id = config.id;
    this._snatEntryName = config.snatEntryName;
    this._snatIp = config.snatIp;
    this._snatTableId = config.snatTableId;
    this._sourceCidr = config.sourceCidr;
    this._sourceVswitchId = config.sourceVswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eip_affinity - computed: false, optional: true, required: false
  private _eipAffinity?: number; 
  public get eipAffinity() {
    return this.getNumberAttribute('eip_affinity');
  }
  public set eipAffinity(value: number) {
    this._eipAffinity = value;
  }
  public resetEipAffinity() {
    this._eipAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipAffinityInput() {
    return this._eipAffinity;
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

  // snat_entry_id - computed: true, optional: false, required: false
  public get snatEntryId() {
    return this.getStringAttribute('snat_entry_id');
  }

  // snat_entry_name - computed: false, optional: true, required: false
  private _snatEntryName?: string; 
  public get snatEntryName() {
    return this.getStringAttribute('snat_entry_name');
  }
  public set snatEntryName(value: string) {
    this._snatEntryName = value;
  }
  public resetSnatEntryName() {
    this._snatEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatEntryNameInput() {
    return this._snatEntryName;
  }

  // snat_ip - computed: false, optional: false, required: true
  private _snatIp?: string; 
  public get snatIp() {
    return this.getStringAttribute('snat_ip');
  }
  public set snatIp(value: string) {
    this._snatIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpInput() {
    return this._snatIp;
  }

  // snat_table_id - computed: false, optional: false, required: true
  private _snatTableId?: string; 
  public get snatTableId() {
    return this.getStringAttribute('snat_table_id');
  }
  public set snatTableId(value: string) {
    this._snatTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatTableIdInput() {
    return this._snatTableId;
  }

  // source_cidr - computed: true, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_vswitch_id - computed: true, optional: true, required: false
  private _sourceVswitchId?: string; 
  public get sourceVswitchId() {
    return this.getStringAttribute('source_vswitch_id');
  }
  public set sourceVswitchId(value: string) {
    this._sourceVswitchId = value;
  }
  public resetSourceVswitchId() {
    this._sourceVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVswitchIdInput() {
    return this._sourceVswitchId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SnatEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SnatEntryTimeouts) {
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
      eip_affinity: cdktf.numberToTerraform(this._eipAffinity),
      id: cdktf.stringToTerraform(this._id),
      snat_entry_name: cdktf.stringToTerraform(this._snatEntryName),
      snat_ip: cdktf.stringToTerraform(this._snatIp),
      snat_table_id: cdktf.stringToTerraform(this._snatTableId),
      source_cidr: cdktf.stringToTerraform(this._sourceCidr),
      source_vswitch_id: cdktf.stringToTerraform(this._sourceVswitchId),
      timeouts: snatEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_affinity: {
        value: cdktf.numberToHclTerraform(this._eipAffinity),
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
      snat_entry_name: {
        value: cdktf.stringToHclTerraform(this._snatEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_ip: {
        value: cdktf.stringToHclTerraform(this._snatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_table_id: {
        value: cdktf.stringToHclTerraform(this._snatTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr: {
        value: cdktf.stringToHclTerraform(this._sourceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._sourceVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: snatEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnatEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
