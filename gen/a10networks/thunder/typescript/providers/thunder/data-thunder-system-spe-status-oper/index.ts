// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemSpeStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#id DataThunderSystemSpeStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#oper DataThunderSystemSpeStatusOper#oper}
  */
  readonly oper?: DataThunderSystemSpeStatusOperOper;
}
export interface DataThunderSystemSpeStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#enable DataThunderSystemSpeStatusOper#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#ipv4_allowed DataThunderSystemSpeStatusOper#ipv4_allowed}
  */
  readonly ipv4Allowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#ipv6_allowed DataThunderSystemSpeStatusOper#ipv6_allowed}
  */
  readonly ipv6Allowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#spe_profile DataThunderSystemSpeStatusOper#spe_profile}
  */
  readonly speProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#spe_setup_status DataThunderSystemSpeStatusOper#spe_setup_status}
  */
  readonly speSetupStatus?: string;
}

export function dataThunderSystemSpeStatusOperOperToTerraform(struct?: DataThunderSystemSpeStatusOperOperOutputReference | DataThunderSystemSpeStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    ipv4_allowed: cdktf.numberToTerraform(struct!.ipv4Allowed),
    ipv6_allowed: cdktf.numberToTerraform(struct!.ipv6Allowed),
    spe_profile: cdktf.stringToTerraform(struct!.speProfile),
    spe_setup_status: cdktf.stringToTerraform(struct!.speSetupStatus),
  }
}


export function dataThunderSystemSpeStatusOperOperToHclTerraform(struct?: DataThunderSystemSpeStatusOperOperOutputReference | DataThunderSystemSpeStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_allowed: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_allowed: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spe_profile: {
      value: cdktf.stringToHclTerraform(struct!.speProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spe_setup_status: {
      value: cdktf.stringToHclTerraform(struct!.speSetupStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemSpeStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemSpeStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ipv4Allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Allowed = this._ipv4Allowed;
    }
    if (this._ipv6Allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Allowed = this._ipv6Allowed;
    }
    if (this._speProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.speProfile = this._speProfile;
    }
    if (this._speSetupStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.speSetupStatus = this._speSetupStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemSpeStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._ipv4Allowed = undefined;
      this._ipv6Allowed = undefined;
      this._speProfile = undefined;
      this._speSetupStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._ipv4Allowed = value.ipv4Allowed;
      this._ipv6Allowed = value.ipv6Allowed;
      this._speProfile = value.speProfile;
      this._speSetupStatus = value.speSetupStatus;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ipv4_allowed - computed: false, optional: true, required: false
  private _ipv4Allowed?: number; 
  public get ipv4Allowed() {
    return this.getNumberAttribute('ipv4_allowed');
  }
  public set ipv4Allowed(value: number) {
    this._ipv4Allowed = value;
  }
  public resetIpv4Allowed() {
    this._ipv4Allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AllowedInput() {
    return this._ipv4Allowed;
  }

  // ipv6_allowed - computed: false, optional: true, required: false
  private _ipv6Allowed?: number; 
  public get ipv6Allowed() {
    return this.getNumberAttribute('ipv6_allowed');
  }
  public set ipv6Allowed(value: number) {
    this._ipv6Allowed = value;
  }
  public resetIpv6Allowed() {
    this._ipv6Allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowedInput() {
    return this._ipv6Allowed;
  }

  // spe_profile - computed: false, optional: true, required: false
  private _speProfile?: string; 
  public get speProfile() {
    return this.getStringAttribute('spe_profile');
  }
  public set speProfile(value: string) {
    this._speProfile = value;
  }
  public resetSpeProfile() {
    this._speProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speProfileInput() {
    return this._speProfile;
  }

  // spe_setup_status - computed: false, optional: true, required: false
  private _speSetupStatus?: string; 
  public get speSetupStatus() {
    return this.getStringAttribute('spe_setup_status');
  }
  public set speSetupStatus(value: string) {
    this._speSetupStatus = value;
  }
  public resetSpeSetupStatus() {
    this._speSetupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speSetupStatusInput() {
    return this._speSetupStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper thunder_system_spe_status_oper}
*/
export class DataThunderSystemSpeStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_spe_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemSpeStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemSpeStatusOper to import
  * @param importFromId The id of the existing DataThunderSystemSpeStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemSpeStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_spe_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_spe_status_oper thunder_system_spe_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemSpeStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemSpeStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_spe_status_oper',
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
  private _oper = new DataThunderSystemSpeStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemSpeStatusOperOper) {
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
      oper: dataThunderSystemSpeStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemSpeStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemSpeStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
