// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemRebootOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#id DataThunderSystemRebootOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#oper DataThunderSystemRebootOper#oper}
  */
  readonly oper?: DataThunderSystemRebootOperOper;
}
export interface DataThunderSystemRebootOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#boot_now DataThunderSystemRebootOper#boot_now}
  */
  readonly bootNow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#boot_scheduled DataThunderSystemRebootOper#boot_scheduled}
  */
  readonly bootScheduled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#epoch_time DataThunderSystemRebootOper#epoch_time}
  */
  readonly epochTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#hostname DataThunderSystemRebootOper#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#hour DataThunderSystemRebootOper#hour}
  */
  readonly hour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#min DataThunderSystemRebootOper#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#reason DataThunderSystemRebootOper#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#uname DataThunderSystemRebootOper#uname}
  */
  readonly uname?: string;
}

export function dataThunderSystemRebootOperOperToTerraform(struct?: DataThunderSystemRebootOperOperOutputReference | DataThunderSystemRebootOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_now: cdktf.numberToTerraform(struct!.bootNow),
    boot_scheduled: cdktf.numberToTerraform(struct!.bootScheduled),
    epoch_time: cdktf.stringToTerraform(struct!.epochTime),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hour: cdktf.stringToTerraform(struct!.hour),
    min: cdktf.stringToTerraform(struct!.min),
    reason: cdktf.stringToTerraform(struct!.reason),
    uname: cdktf.stringToTerraform(struct!.uname),
  }
}


export function dataThunderSystemRebootOperOperToHclTerraform(struct?: DataThunderSystemRebootOperOperOutputReference | DataThunderSystemRebootOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_now: {
      value: cdktf.numberToHclTerraform(struct!.bootNow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_scheduled: {
      value: cdktf.numberToHclTerraform(struct!.bootScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epoch_time: {
      value: cdktf.stringToHclTerraform(struct!.epochTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uname: {
      value: cdktf.stringToHclTerraform(struct!.uname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemRebootOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemRebootOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootNow = this._bootNow;
    }
    if (this._bootScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootScheduled = this._bootScheduled;
    }
    if (this._epochTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTime = this._epochTime;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._uname !== undefined) {
      hasAnyValues = true;
      internalValueResult.uname = this._uname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemRebootOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootNow = undefined;
      this._bootScheduled = undefined;
      this._epochTime = undefined;
      this._hostname = undefined;
      this._hour = undefined;
      this._min = undefined;
      this._reason = undefined;
      this._uname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootNow = value.bootNow;
      this._bootScheduled = value.bootScheduled;
      this._epochTime = value.epochTime;
      this._hostname = value.hostname;
      this._hour = value.hour;
      this._min = value.min;
      this._reason = value.reason;
      this._uname = value.uname;
    }
  }

  // boot_now - computed: false, optional: true, required: false
  private _bootNow?: number; 
  public get bootNow() {
    return this.getNumberAttribute('boot_now');
  }
  public set bootNow(value: number) {
    this._bootNow = value;
  }
  public resetBootNow() {
    this._bootNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootNowInput() {
    return this._bootNow;
  }

  // boot_scheduled - computed: false, optional: true, required: false
  private _bootScheduled?: number; 
  public get bootScheduled() {
    return this.getNumberAttribute('boot_scheduled');
  }
  public set bootScheduled(value: number) {
    this._bootScheduled = value;
  }
  public resetBootScheduled() {
    this._bootScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootScheduledInput() {
    return this._bootScheduled;
  }

  // epoch_time - computed: false, optional: true, required: false
  private _epochTime?: string; 
  public get epochTime() {
    return this.getStringAttribute('epoch_time');
  }
  public set epochTime(value: string) {
    this._epochTime = value;
  }
  public resetEpochTime() {
    this._epochTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeInput() {
    return this._epochTime;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // uname - computed: false, optional: true, required: false
  private _uname?: string; 
  public get uname() {
    return this.getStringAttribute('uname');
  }
  public set uname(value: string) {
    this._uname = value;
  }
  public resetUname() {
    this._uname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unameInput() {
    return this._uname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper thunder_system_reboot_oper}
*/
export class DataThunderSystemRebootOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_reboot_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemRebootOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemRebootOper to import
  * @param importFromId The id of the existing DataThunderSystemRebootOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemRebootOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_reboot_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_reboot_oper thunder_system_reboot_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemRebootOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemRebootOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_reboot_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemRebootOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemRebootOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemRebootOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemRebootOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemRebootOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
