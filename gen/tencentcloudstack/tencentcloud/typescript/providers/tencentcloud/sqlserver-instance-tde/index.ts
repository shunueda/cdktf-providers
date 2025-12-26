// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverInstanceTdeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate attribution. self- means to use the account's own certificate, others- means to refer to the certificate of other accounts, and the default is self.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde#certificate_attribution SqlserverInstanceTde#certificate_attribution}
  */
  readonly certificateAttribution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde#id SqlserverInstanceTde#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde#instance_id SqlserverInstanceTde#instance_id}
  */
  readonly instanceId: string;
  /**
  * Other referenced main account IDs, required when CertificateAttribute is others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde#quote_uin SqlserverInstanceTde#quote_uin}
  */
  readonly quoteUin?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde tencentcloud_sqlserver_instance_tde}
*/
export class SqlserverInstanceTde extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_instance_tde";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverInstanceTde resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverInstanceTde to import
  * @param importFromId The id of the existing SqlserverInstanceTde that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverInstanceTde to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_instance_tde", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_instance_tde tencentcloud_sqlserver_instance_tde} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverInstanceTdeConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverInstanceTdeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_instance_tde',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateAttribution = config.certificateAttribution;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._quoteUin = config.quoteUin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_attribution - computed: false, optional: false, required: true
  private _certificateAttribution?: string; 
  public get certificateAttribution() {
    return this.getStringAttribute('certificate_attribution');
  }
  public set certificateAttribution(value: string) {
    this._certificateAttribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAttributionInput() {
    return this._certificateAttribution;
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

  // quote_uin - computed: false, optional: true, required: false
  private _quoteUin?: string; 
  public get quoteUin() {
    return this.getStringAttribute('quote_uin');
  }
  public set quoteUin(value: string) {
    this._quoteUin = value;
  }
  public resetQuoteUin() {
    this._quoteUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteUinInput() {
    return this._quoteUin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_attribution: cdktf.stringToTerraform(this._certificateAttribution),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      quote_uin: cdktf.stringToTerraform(this._quoteUin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_attribution: {
        value: cdktf.stringToHclTerraform(this._certificateAttribution),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quote_uin: {
        value: cdktf.stringToHclTerraform(this._quoteUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
