// https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#admission_webhook_secret Contract#admission_webhook_secret}
  */
  readonly admissionWebhookSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#admission_webhook_url Contract#admission_webhook_url}
  */
  readonly admissionWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#exclude_tags Contract#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#include_tags Contract#include_tags}
  */
  readonly includeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#name Contract#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#namespace Contract#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#readme Contract#readme}
  */
  readonly readme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#routing_url Contract#routing_url}
  */
  readonly routingUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#source Contract#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#supports_federation Contract#supports_federation}
  */
  readonly supportsFederation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract cosmo_contract}
*/
export class Contract extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosmo_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contract to import
  * @param importFromId The id of the existing Contract that should be imported. Refer to the {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosmo_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wundergraph/cosmo/0.5.2/docs/resources/contract cosmo_contract} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContractConfig
  */
  public constructor(scope: Construct, id: string, config: ContractConfig) {
    super(scope, id, {
      terraformResourceType: 'cosmo_contract',
      terraformGeneratorMetadata: {
        providerName: 'cosmo',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admissionWebhookSecret = config.admissionWebhookSecret;
    this._admissionWebhookUrl = config.admissionWebhookUrl;
    this._excludeTags = config.excludeTags;
    this._includeTags = config.includeTags;
    this._name = config.name;
    this._namespace = config.namespace;
    this._readme = config.readme;
    this._routingUrl = config.routingUrl;
    this._source = config.source;
    this._supportsFederation = config.supportsFederation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_webhook_secret - computed: false, optional: true, required: false
  private _admissionWebhookSecret?: string; 
  public get admissionWebhookSecret() {
    return this.getStringAttribute('admission_webhook_secret');
  }
  public set admissionWebhookSecret(value: string) {
    this._admissionWebhookSecret = value;
  }
  public resetAdmissionWebhookSecret() {
    this._admissionWebhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookSecretInput() {
    return this._admissionWebhookSecret;
  }

  // admission_webhook_url - computed: false, optional: true, required: false
  private _admissionWebhookUrl?: string; 
  public get admissionWebhookUrl() {
    return this.getStringAttribute('admission_webhook_url');
  }
  public set admissionWebhookUrl(value: string) {
    this._admissionWebhookUrl = value;
  }
  public resetAdmissionWebhookUrl() {
    this._admissionWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWebhookUrlInput() {
    return this._admissionWebhookUrl;
  }

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: string[]; 
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }
  public set includeTags(value: string[]) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // routing_url - computed: false, optional: false, required: true
  private _routingUrl?: string; 
  public get routingUrl() {
    return this.getStringAttribute('routing_url');
  }
  public set routingUrl(value: string) {
    this._routingUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingUrlInput() {
    return this._routingUrl;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // supports_federation - computed: true, optional: true, required: false
  private _supportsFederation?: boolean | cdktf.IResolvable; 
  public get supportsFederation() {
    return this.getBooleanAttribute('supports_federation');
  }
  public set supportsFederation(value: boolean | cdktf.IResolvable) {
    this._supportsFederation = value;
  }
  public resetSupportsFederation() {
    this._supportsFederation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsFederationInput() {
    return this._supportsFederation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admission_webhook_secret: cdktf.stringToTerraform(this._admissionWebhookSecret),
      admission_webhook_url: cdktf.stringToTerraform(this._admissionWebhookUrl),
      exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeTags),
      include_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeTags),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      readme: cdktf.stringToTerraform(this._readme),
      routing_url: cdktf.stringToTerraform(this._routingUrl),
      source: cdktf.stringToTerraform(this._source),
      supports_federation: cdktf.booleanToTerraform(this._supportsFederation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admission_webhook_secret: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admission_webhook_url: {
        value: cdktf.stringToHclTerraform(this._admissionWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readme: {
        value: cdktf.stringToHclTerraform(this._readme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_url: {
        value: cdktf.stringToHclTerraform(this._routingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supports_federation: {
        value: cdktf.booleanToHclTerraform(this._supportsFederation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
