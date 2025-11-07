// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNginxproxymanagerRedirectionHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the redirection host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_host#id DataNginxproxymanagerRedirectionHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_host nginxproxymanager_redirection_host}
*/
export class DataNginxproxymanagerRedirectionHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_redirection_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNginxproxymanagerRedirectionHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNginxproxymanagerRedirectionHost to import
  * @param importFromId The id of the existing DataNginxproxymanagerRedirectionHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNginxproxymanagerRedirectionHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_redirection_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_host nginxproxymanager_redirection_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNginxproxymanagerRedirectionHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataNginxproxymanagerRedirectionHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_redirection_host',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_config - computed: true, optional: false, required: false
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }

  // block_exploits - computed: true, optional: false, required: false
  public get blockExploits() {
    return this.getBooleanAttribute('block_exploits');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // forward_domain_name - computed: true, optional: false, required: false
  public get forwardDomainName() {
    return this.getStringAttribute('forward_domain_name');
  }

  // forward_http_code - computed: true, optional: false, required: false
  public get forwardHttpCode() {
    return this.getNumberAttribute('forward_http_code');
  }

  // forward_scheme - computed: true, optional: false, required: false
  public get forwardScheme() {
    return this.getStringAttribute('forward_scheme');
  }

  // hsts_enabled - computed: true, optional: false, required: false
  public get hstsEnabled() {
    return this.getBooleanAttribute('hsts_enabled');
  }

  // hsts_subdomains - computed: true, optional: false, required: false
  public get hstsSubdomains() {
    return this.getBooleanAttribute('hsts_subdomains');
  }

  // http2_support - computed: true, optional: false, required: false
  public get http2Support() {
    return this.getBooleanAttribute('http2_support');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // preserve_path - computed: true, optional: false, required: false
  public get preservePath() {
    return this.getBooleanAttribute('preserve_path');
  }

  // ssl_forced - computed: true, optional: false, required: false
  public get sslForced() {
    return this.getBooleanAttribute('ssl_forced');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
