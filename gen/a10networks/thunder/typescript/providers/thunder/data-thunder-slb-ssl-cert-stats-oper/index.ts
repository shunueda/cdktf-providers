// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCertStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#id DataThunderSlbSslCertStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#oper DataThunderSlbSslCertStatsOper#oper}
  */
  readonly oper?: DataThunderSlbSslCertStatsOperOper;
}
export interface DataThunderSlbSslCertStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#ca_cert_count DataThunderSlbSslCertStatsOper#ca_cert_count}
  */
  readonly caCertCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#cert_count DataThunderSlbSslCertStatsOper#cert_count}
  */
  readonly certCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#key_count DataThunderSlbSslCertStatsOper#key_count}
  */
  readonly keyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#partition DataThunderSlbSslCertStatsOper#partition}
  */
  readonly partition?: string;
}

export function dataThunderSlbSslCertStatsOperOperToTerraform(struct?: DataThunderSlbSslCertStatsOperOperOutputReference | DataThunderSlbSslCertStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_count: cdktf.numberToTerraform(struct!.caCertCount),
    cert_count: cdktf.numberToTerraform(struct!.certCount),
    key_count: cdktf.numberToTerraform(struct!.keyCount),
    partition: cdktf.stringToTerraform(struct!.partition),
  }
}


export function dataThunderSlbSslCertStatsOperOperToHclTerraform(struct?: DataThunderSlbSslCertStatsOperOperOutputReference | DataThunderSlbSslCertStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_count: {
      value: cdktf.numberToHclTerraform(struct!.caCertCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_count: {
      value: cdktf.numberToHclTerraform(struct!.certCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_count: {
      value: cdktf.numberToHclTerraform(struct!.keyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCertStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertCount = this._caCertCount;
    }
    if (this._certCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCount = this._certCount;
    }
    if (this._keyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCount = this._keyCount;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertCount = undefined;
      this._certCount = undefined;
      this._keyCount = undefined;
      this._partition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertCount = value.caCertCount;
      this._certCount = value.certCount;
      this._keyCount = value.keyCount;
      this._partition = value.partition;
    }
  }

  // ca_cert_count - computed: false, optional: true, required: false
  private _caCertCount?: number; 
  public get caCertCount() {
    return this.getNumberAttribute('ca_cert_count');
  }
  public set caCertCount(value: number) {
    this._caCertCount = value;
  }
  public resetCaCertCount() {
    this._caCertCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertCountInput() {
    return this._caCertCount;
  }

  // cert_count - computed: false, optional: true, required: false
  private _certCount?: number; 
  public get certCount() {
    return this.getNumberAttribute('cert_count');
  }
  public set certCount(value: number) {
    this._certCount = value;
  }
  public resetCertCount() {
    this._certCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCountInput() {
    return this._certCount;
  }

  // key_count - computed: false, optional: true, required: false
  private _keyCount?: number; 
  public get keyCount() {
    return this.getNumberAttribute('key_count');
  }
  public set keyCount(value: number) {
    this._keyCount = value;
  }
  public resetKeyCount() {
    this._keyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCountInput() {
    return this._keyCount;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper thunder_slb_ssl_cert_stats_oper}
*/
export class DataThunderSlbSslCertStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_cert_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCertStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCertStatsOper to import
  * @param importFromId The id of the existing DataThunderSlbSslCertStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCertStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_cert_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_stats_oper thunder_slb_ssl_cert_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCertStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCertStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_cert_stats_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderSlbSslCertStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslCertStatsOperOper) {
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
      oper: dataThunderSlbSslCertStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslCertStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCertStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
