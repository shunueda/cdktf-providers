// https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricsProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required by the Datadog and NewRelic type metrics providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#api_key MetricsProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Required by the Librato, Pingdom and Datadog type metrics providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#api_token MetricsProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Required by the Pingdom-type metrics provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#application_key MetricsProvider#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Required by the Librato and Pingdom type metrics providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#email MetricsProvider#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#id MetricsProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required by the NewRelic-type metrics provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#metric_base_uri MetricsProvider#metric_base_uri}
  */
  readonly metricBaseUri?: string;
  /**
  * The ID of the page this metric provider belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#page_id MetricsProvider#page_id}
  */
  readonly pageId: string;
  /**
  * Required by the Pingdom-type metrics provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#password MetricsProvider#password}
  */
  readonly password?: string;
  /**
  * One of 'Pingdom', 'NewRelic', 'Librato', 'Datadog', or 'Self'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#type MetricsProvider#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider statuspage_metrics_provider}
*/
export class MetricsProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuspage_metrics_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricsProvider to import
  * @param importFromId The id of the existing MetricsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuspage_metrics_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metrics_provider statuspage_metrics_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MetricsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'statuspage_metrics_provider',
      terraformGeneratorMetadata: {
        providerName: 'statuspage',
        providerVersion: '0.1.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._apiToken = config.apiToken;
    this._applicationKey = config.applicationKey;
    this._email = config.email;
    this._id = config.id;
    this._metricBaseUri = config.metricBaseUri;
    this._pageId = config.pageId;
    this._password = config.password;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // application_key - computed: false, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // metric_base_uri - computed: false, optional: true, required: false
  private _metricBaseUri?: string; 
  public get metricBaseUri() {
    return this.getStringAttribute('metric_base_uri');
  }
  public set metricBaseUri(value: string) {
    this._metricBaseUri = value;
  }
  public resetMetricBaseUri() {
    this._metricBaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricBaseUriInput() {
    return this._metricBaseUri;
  }

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_token: cdktf.stringToTerraform(this._apiToken),
      application_key: cdktf.stringToTerraform(this._applicationKey),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      metric_base_uri: cdktf.stringToTerraform(this._metricBaseUri),
      page_id: cdktf.stringToTerraform(this._pageId),
      password: cdktf.stringToTerraform(this._password),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      metric_base_uri: {
        value: cdktf.stringToHclTerraform(this._metricBaseUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_id: {
        value: cdktf.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
