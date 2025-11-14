// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileUrlextractionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#adom ObjectWebfilterProfileUrlextraction#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#id ObjectWebfilterProfileUrlextraction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#profile ObjectWebfilterProfileUrlextraction#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#redirect_header ObjectWebfilterProfileUrlextraction#redirect_header}
  */
  readonly redirectHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#redirect_no_content ObjectWebfilterProfileUrlextraction#redirect_no_content}
  */
  readonly redirectNoContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#redirect_url ObjectWebfilterProfileUrlextraction#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#scopetype ObjectWebfilterProfileUrlextraction#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#server_fqdn ObjectWebfilterProfileUrlextraction#server_fqdn}
  */
  readonly serverFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#status ObjectWebfilterProfileUrlextraction#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction fortimanager_object_webfilter_profile_urlextraction}
*/
export class ObjectWebfilterProfileUrlextraction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_urlextraction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileUrlextraction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileUrlextraction to import
  * @param importFromId The id of the existing ObjectWebfilterProfileUrlextraction that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileUrlextraction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_urlextraction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_urlextraction fortimanager_object_webfilter_profile_urlextraction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileUrlextractionConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileUrlextractionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_urlextraction',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._profile = config.profile;
    this._redirectHeader = config.redirectHeader;
    this._redirectNoContent = config.redirectNoContent;
    this._redirectUrl = config.redirectUrl;
    this._scopetype = config.scopetype;
    this._serverFqdn = config.serverFqdn;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // redirect_header - computed: false, optional: true, required: false
  private _redirectHeader?: string; 
  public get redirectHeader() {
    return this.getStringAttribute('redirect_header');
  }
  public set redirectHeader(value: string) {
    this._redirectHeader = value;
  }
  public resetRedirectHeader() {
    this._redirectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHeaderInput() {
    return this._redirectHeader;
  }

  // redirect_no_content - computed: false, optional: true, required: false
  private _redirectNoContent?: string; 
  public get redirectNoContent() {
    return this.getStringAttribute('redirect_no_content');
  }
  public set redirectNoContent(value: string) {
    this._redirectNoContent = value;
  }
  public resetRedirectNoContent() {
    this._redirectNoContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectNoContentInput() {
    return this._redirectNoContent;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // server_fqdn - computed: false, optional: true, required: false
  private _serverFqdn?: string; 
  public get serverFqdn() {
    return this.getStringAttribute('server_fqdn');
  }
  public set serverFqdn(value: string) {
    this._serverFqdn = value;
  }
  public resetServerFqdn() {
    this._serverFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFqdnInput() {
    return this._serverFqdn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      redirect_header: cdktf.stringToTerraform(this._redirectHeader),
      redirect_no_content: cdktf.stringToTerraform(this._redirectNoContent),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_fqdn: cdktf.stringToTerraform(this._serverFqdn),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_header: {
        value: cdktf.stringToHclTerraform(this._redirectHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_no_content: {
        value: cdktf.stringToHclTerraform(this._redirectNoContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_fqdn: {
        value: cdktf.stringToHclTerraform(this._serverFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
