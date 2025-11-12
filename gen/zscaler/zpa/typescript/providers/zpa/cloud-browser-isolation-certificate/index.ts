// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBrowserIsolationCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate#name CloudBrowserIsolationCertificate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate#pem CloudBrowserIsolationCertificate#pem}
  */
  readonly pem?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate zpa_cloud_browser_isolation_certificate}
*/
export class CloudBrowserIsolationCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_cloud_browser_isolation_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBrowserIsolationCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBrowserIsolationCertificate to import
  * @param importFromId The id of the existing CloudBrowserIsolationCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBrowserIsolationCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_cloud_browser_isolation_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_certificate zpa_cloud_browser_isolation_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBrowserIsolationCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudBrowserIsolationCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_cloud_browser_isolation_certificate',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._pem = config.pem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pem - computed: false, optional: true, required: false
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  public resetPem() {
    this._pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      pem: cdktf.stringToTerraform(this._pem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pem: {
        value: cdktf.stringToHclTerraform(this._pem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
