// https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnomalyDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The anomaly detection document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection#body AnomalyDetection#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection#id AnomalyDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection opensearch_anomaly_detection}
*/
export class AnomalyDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_anomaly_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnomalyDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnomalyDetection to import
  * @param importFromId The id of the existing AnomalyDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnomalyDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_anomaly_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/anomaly_detection opensearch_anomaly_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnomalyDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: AnomalyDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_anomaly_detection',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '2.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
