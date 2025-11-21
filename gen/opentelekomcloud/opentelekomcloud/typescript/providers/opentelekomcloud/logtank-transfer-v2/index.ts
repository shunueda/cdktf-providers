// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtankTransferV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}
  */
  readonly dirPrefixName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}
  */
  readonly logStreamIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}
  */
  readonly obsBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}
  */
  readonly periodUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}
  */
  readonly prefixName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}
  */
  readonly storageFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}
  */
  readonly switchOn?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2}
*/
export class LogtankTransferV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_logtank_transfer_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogtankTransferV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogtankTransferV2 to import
  * @param importFromId The id of the existing LogtankTransferV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogtankTransferV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_logtank_transfer_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtankTransferV2Config
  */
  public constructor(scope: Construct, id: string, config: LogtankTransferV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_logtank_transfer_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dirPrefixName = config.dirPrefixName;
    this._id = config.id;
    this._logGroupId = config.logGroupId;
    this._logStreamIds = config.logStreamIds;
    this._obsBucketName = config.obsBucketName;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._prefixName = config.prefixName;
    this._storageFormat = config.storageFormat;
    this._switchOn = config.switchOn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // dir_prefix_name - computed: true, optional: true, required: false
  private _dirPrefixName?: string; 
  public get dirPrefixName() {
    return this.getStringAttribute('dir_prefix_name');
  }
  public set dirPrefixName(value: string) {
    this._dirPrefixName = value;
  }
  public resetDirPrefixName() {
    this._dirPrefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirPrefixNameInput() {
    return this._dirPrefixName;
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

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_ids - computed: false, optional: false, required: true
  private _logStreamIds?: string[]; 
  public get logStreamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('log_stream_ids'));
  }
  public set logStreamIds(value: string[]) {
    this._logStreamIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdsInput() {
    return this._logStreamIds;
  }

  // log_transfer_mode - computed: true, optional: false, required: false
  public get logTransferMode() {
    return this.getStringAttribute('log_transfer_mode');
  }

  // log_transfer_type - computed: true, optional: false, required: false
  public get logTransferType() {
    return this.getStringAttribute('log_transfer_type');
  }

  // obs_bucket_name - computed: false, optional: false, required: true
  private _obsBucketName?: string; 
  public get obsBucketName() {
    return this.getStringAttribute('obs_bucket_name');
  }
  public set obsBucketName(value: string) {
    this._obsBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get obsBucketNameInput() {
    return this._obsBucketName;
  }

  // obs_encryption_enable - computed: true, optional: false, required: false
  public get obsEncryptionEnable() {
    return this.getBooleanAttribute('obs_encryption_enable');
  }

  // obs_encryption_id - computed: true, optional: false, required: false
  public get obsEncryptionId() {
    return this.getStringAttribute('obs_encryption_id');
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: false, required: true
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // prefix_name - computed: true, optional: true, required: false
  private _prefixName?: string; 
  public get prefixName() {
    return this.getStringAttribute('prefix_name');
  }
  public set prefixName(value: string) {
    this._prefixName = value;
  }
  public resetPrefixName() {
    this._prefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNameInput() {
    return this._prefixName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_format - computed: false, optional: false, required: true
  private _storageFormat?: string; 
  public get storageFormat() {
    return this.getStringAttribute('storage_format');
  }
  public set storageFormat(value: string) {
    this._storageFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageFormatInput() {
    return this._storageFormat;
  }

  // switch_on - computed: false, optional: true, required: false
  private _switchOn?: boolean | cdktf.IResolvable; 
  public get switchOn() {
    return this.getBooleanAttribute('switch_on');
  }
  public set switchOn(value: boolean | cdktf.IResolvable) {
    this._switchOn = value;
  }
  public resetSwitchOn() {
    this._switchOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchOnInput() {
    return this._switchOn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dir_prefix_name: cdktf.stringToTerraform(this._dirPrefixName),
      id: cdktf.stringToTerraform(this._id),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_stream_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logStreamIds),
      obs_bucket_name: cdktf.stringToTerraform(this._obsBucketName),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      prefix_name: cdktf.stringToTerraform(this._prefixName),
      storage_format: cdktf.stringToTerraform(this._storageFormat),
      switch_on: cdktf.booleanToTerraform(this._switchOn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dir_prefix_name: {
        value: cdktf.stringToHclTerraform(this._dirPrefixName),
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
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logStreamIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      obs_bucket_name: {
        value: cdktf.stringToHclTerraform(this._obsBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_name: {
        value: cdktf.stringToHclTerraform(this._prefixName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_format: {
        value: cdktf.stringToHclTerraform(this._storageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_on: {
        value: cdktf.booleanToHclTerraform(this._switchOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
