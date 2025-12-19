// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemSslStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#id DataThunderSystemSslStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#oper DataThunderSystemSslStatusOper#oper}
  */
  readonly oper?: DataThunderSystemSslStatusOperOper;
}
export interface DataThunderSystemSslStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#crypto_support DataThunderSystemSslStatusOper#crypto_support}
  */
  readonly cryptoSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#enable DataThunderSystemSslStatusOper#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#num_aes DataThunderSystemSslStatusOper#num_aes}
  */
  readonly numAes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#num_chip DataThunderSystemSslStatusOper#num_chip}
  */
  readonly numChip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#ssl_setup_status DataThunderSystemSslStatusOper#ssl_setup_status}
  */
  readonly sslSetupStatus?: string;
}

export function dataThunderSystemSslStatusOperOperToTerraform(struct?: DataThunderSystemSslStatusOperOperOutputReference | DataThunderSystemSslStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_support: cdktf.stringToTerraform(struct!.cryptoSupport),
    enable: cdktf.stringToTerraform(struct!.enable),
    num_aes: cdktf.numberToTerraform(struct!.numAes),
    num_chip: cdktf.numberToTerraform(struct!.numChip),
    ssl_setup_status: cdktf.stringToTerraform(struct!.sslSetupStatus),
  }
}


export function dataThunderSystemSslStatusOperOperToHclTerraform(struct?: DataThunderSystemSslStatusOperOperOutputReference | DataThunderSystemSslStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_support: {
      value: cdktf.stringToHclTerraform(struct!.cryptoSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_aes: {
      value: cdktf.numberToHclTerraform(struct!.numAes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_chip: {
      value: cdktf.numberToHclTerraform(struct!.numChip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_setup_status: {
      value: cdktf.stringToHclTerraform(struct!.sslSetupStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemSslStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemSslStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoSupport = this._cryptoSupport;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._numAes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAes = this._numAes;
    }
    if (this._numChip !== undefined) {
      hasAnyValues = true;
      internalValueResult.numChip = this._numChip;
    }
    if (this._sslSetupStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSetupStatus = this._sslSetupStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemSslStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoSupport = undefined;
      this._enable = undefined;
      this._numAes = undefined;
      this._numChip = undefined;
      this._sslSetupStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoSupport = value.cryptoSupport;
      this._enable = value.enable;
      this._numAes = value.numAes;
      this._numChip = value.numChip;
      this._sslSetupStatus = value.sslSetupStatus;
    }
  }

  // crypto_support - computed: false, optional: true, required: false
  private _cryptoSupport?: string; 
  public get cryptoSupport() {
    return this.getStringAttribute('crypto_support');
  }
  public set cryptoSupport(value: string) {
    this._cryptoSupport = value;
  }
  public resetCryptoSupport() {
    this._cryptoSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoSupportInput() {
    return this._cryptoSupport;
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

  // num_aes - computed: false, optional: true, required: false
  private _numAes?: number; 
  public get numAes() {
    return this.getNumberAttribute('num_aes');
  }
  public set numAes(value: number) {
    this._numAes = value;
  }
  public resetNumAes() {
    this._numAes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAesInput() {
    return this._numAes;
  }

  // num_chip - computed: false, optional: true, required: false
  private _numChip?: number; 
  public get numChip() {
    return this.getNumberAttribute('num_chip');
  }
  public set numChip(value: number) {
    this._numChip = value;
  }
  public resetNumChip() {
    this._numChip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numChipInput() {
    return this._numChip;
  }

  // ssl_setup_status - computed: false, optional: true, required: false
  private _sslSetupStatus?: string; 
  public get sslSetupStatus() {
    return this.getStringAttribute('ssl_setup_status');
  }
  public set sslSetupStatus(value: string) {
    this._sslSetupStatus = value;
  }
  public resetSslSetupStatus() {
    this._sslSetupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSetupStatusInput() {
    return this._sslSetupStatus;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper thunder_system_ssl_status_oper}
*/
export class DataThunderSystemSslStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ssl_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemSslStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemSslStatusOper to import
  * @param importFromId The id of the existing DataThunderSystemSslStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemSslStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ssl_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ssl_status_oper thunder_system_ssl_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemSslStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemSslStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ssl_status_oper',
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
  private _oper = new DataThunderSystemSslStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemSslStatusOperOper) {
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
      oper: dataThunderSystemSslStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemSslStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemSslStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
