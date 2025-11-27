// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterrogationServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services#default_scanner InterrogationServices#default_scanner}
  */
  readonly defaultScanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services#id InterrogationServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services#vulnerability_scan_policy InterrogationServices#vulnerability_scan_policy}
  */
  readonly vulnerabilityScanPolicy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services harbor_interrogation_services}
*/
export class InterrogationServices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_interrogation_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterrogationServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterrogationServices to import
  * @param importFromId The id of the existing InterrogationServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterrogationServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_interrogation_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/interrogation_services harbor_interrogation_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterrogationServicesConfig
  */
  public constructor(scope: Construct, id: string, config: InterrogationServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_interrogation_services',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultScanner = config.defaultScanner;
    this._id = config.id;
    this._vulnerabilityScanPolicy = config.vulnerabilityScanPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_scanner - computed: false, optional: true, required: false
  private _defaultScanner?: string; 
  public get defaultScanner() {
    return this.getStringAttribute('default_scanner');
  }
  public set defaultScanner(value: string) {
    this._defaultScanner = value;
  }
  public resetDefaultScanner() {
    this._defaultScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScannerInput() {
    return this._defaultScanner;
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

  // vulnerability_scan_policy - computed: false, optional: false, required: true
  private _vulnerabilityScanPolicy?: string; 
  public get vulnerabilityScanPolicy() {
    return this.getStringAttribute('vulnerability_scan_policy');
  }
  public set vulnerabilityScanPolicy(value: string) {
    this._vulnerabilityScanPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityScanPolicyInput() {
    return this._vulnerabilityScanPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_scanner: cdktf.stringToTerraform(this._defaultScanner),
      id: cdktf.stringToTerraform(this._id),
      vulnerability_scan_policy: cdktf.stringToTerraform(this._vulnerabilityScanPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_scanner: {
        value: cdktf.stringToHclTerraform(this._defaultScanner),
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
      vulnerability_scan_policy: {
        value: cdktf.stringToHclTerraform(this._vulnerabilityScanPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
