// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingEmailDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the custom SMTP server integration to use when sending outbound emails from this domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#custom_smtp_server_id RoutingEmailDomain#custom_smtp_server_id}
  */
  readonly customSmtpServerId?: string;
  /**
  * Unique Id of the domain such as: 'example.com'. If subdomain is true, the Genesys Cloud regional domain is appended. Changing the domain_id attribute will cause the routing_email_domain to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#domain_id RoutingEmailDomain#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#id RoutingEmailDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The custom MAIL FROM domain. This must be a subdomain of your email domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#mail_from_domain RoutingEmailDomain#mail_from_domain}
  */
  readonly mailFromDomain?: string;
  /**
  * Indicates if this a Genesys Cloud sub-domain. If true, then the appropriate DNS records are created for sending/receiving email. Changing the subdomain attribute will cause the routing_email_domain to be dropped and recreated with a new ID. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#subdomain RoutingEmailDomain#subdomain}
  */
  readonly subdomain?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain genesyscloud_routing_email_domain}
*/
export class RoutingEmailDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_email_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingEmailDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingEmailDomain to import
  * @param importFromId The id of the existing RoutingEmailDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingEmailDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_email_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/routing_email_domain genesyscloud_routing_email_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingEmailDomainConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingEmailDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_email_domain',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customSmtpServerId = config.customSmtpServerId;
    this._domainId = config.domainId;
    this._id = config.id;
    this._mailFromDomain = config.mailFromDomain;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_smtp_server_id - computed: false, optional: true, required: false
  private _customSmtpServerId?: string; 
  public get customSmtpServerId() {
    return this.getStringAttribute('custom_smtp_server_id');
  }
  public set customSmtpServerId(value: string) {
    this._customSmtpServerId = value;
  }
  public resetCustomSmtpServerId() {
    this._customSmtpServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSmtpServerIdInput() {
    return this._customSmtpServerId;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // mail_from_domain - computed: false, optional: true, required: false
  private _mailFromDomain?: string; 
  public get mailFromDomain() {
    return this.getStringAttribute('mail_from_domain');
  }
  public set mailFromDomain(value: string) {
    this._mailFromDomain = value;
  }
  public resetMailFromDomain() {
    this._mailFromDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromDomainInput() {
    return this._mailFromDomain;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: boolean | cdktf.IResolvable; 
  public get subdomain() {
    return this.getBooleanAttribute('subdomain');
  }
  public set subdomain(value: boolean | cdktf.IResolvable) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_smtp_server_id: cdktf.stringToTerraform(this._customSmtpServerId),
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      mail_from_domain: cdktf.stringToTerraform(this._mailFromDomain),
      subdomain: cdktf.booleanToTerraform(this._subdomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_smtp_server_id: {
        value: cdktf.stringToHclTerraform(this._customSmtpServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      mail_from_domain: {
        value: cdktf.stringToHclTerraform(this._mailFromDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdomain: {
        value: cdktf.booleanToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
