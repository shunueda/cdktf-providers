// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmRequestLogProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the profile from which this profile inherits settings. The default is the system-supplied `request-log` profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#defaults_from LtmRequestLogProfile#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * User defined description for Request Logging profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#description LtmRequestLogProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#id LtmRequestLogProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Request Logging profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#name LtmRequestLogProfile#name}
  */
  readonly name: string;
  /**
  * Defines the pool associated with logging request errors. The default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#proxy_response LtmRequestLogProfile#proxy_response}
  */
  readonly proxyResponse?: string;
  /**
  * Defines the pool associated with logging request errors. The default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#proxyclose_on_error LtmRequestLogProfile#proxyclose_on_error}
  */
  readonly proxycloseOnError?: string;
  /**
  * Defines the pool associated with logging request errors. The default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#proxyrespond_on_loggingerror LtmRequestLogProfile#proxyrespond_on_loggingerror}
  */
  readonly proxyrespondOnLoggingerror?: string;
  /**
  * Enables or disables request logging. The default is `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#request_logging LtmRequestLogProfile#request_logging}
  */
  readonly requestLogging?: string;
  /**
  * Defines the pool associated with logging request errors. The default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_error_pool LtmRequestLogProfile#requestlog_error_pool}
  */
  readonly requestlogErrorPool?: string;
  /**
  * Defines the protocol to be used for high-speed logging of request errors. The default is `mds-udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_error_protocol LtmRequestLogProfile#requestlog_error_protocol}
  */
  readonly requestlogErrorProtocol?: string;
  /**
  * Specifies the directives and entries to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_error_template LtmRequestLogProfile#requestlog_error_template}
  */
  readonly requestlogErrorTemplate?: string;
  /**
  * Defines the pool to send logs to. Typically, the pool will contain one or more syslog servers. It is recommended that you create a pool specifically for logging requests. The default is None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_pool LtmRequestLogProfile#requestlog_pool}
  */
  readonly requestlogPool?: string;
  /**
  * Specifies the protocol to be used for high-speed logging of requests. The default is `mds-udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_protocol LtmRequestLogProfile#requestlog_protocol}
  */
  readonly requestlogProtocol?: string;
  /**
  * Specifies the directives and entries to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#requestlog_template LtmRequestLogProfile#requestlog_template}
  */
  readonly requestlogTemplate?: string;
  /**
  * Enables or disables response logging. The default is `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#response_logging LtmRequestLogProfile#response_logging}
  */
  readonly responseLogging?: string;
  /**
  * Defines the pool associated with logging response errors. The default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_error_pool LtmRequestLogProfile#responselog_error_pool}
  */
  readonly responselogErrorPool?: string;
  /**
  * Defines the protocol to be used for high-speed logging of responses errors. The default is `mds-udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_error_protocol LtmRequestLogProfile#responselog_error_protocol}
  */
  readonly responselogErrorProtocol?: string;
  /**
  * Specifies the directives and entries to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_error_template LtmRequestLogProfile#responselog_error_template}
  */
  readonly responselogErrorTemplate?: string;
  /**
  * Defines the pool to send logs to. Typically, the pool contains one or more syslog servers. It is recommended that you create a pool specifically for logging responses. The default is None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_pool LtmRequestLogProfile#responselog_pool}
  */
  readonly responselogPool?: string;
  /**
  * Specifies the protocol to be used for high-speed logging of responses. The default is `mds-udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_protocol LtmRequestLogProfile#responselog_protocol}
  */
  readonly responselogProtocol?: string;
  /**
  * Specifies the directives and entries to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#responselog_template LtmRequestLogProfile#responselog_template}
  */
  readonly responselogTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile bigip_ltm_request_log_profile}
*/
export class LtmRequestLogProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_request_log_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmRequestLogProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmRequestLogProfile to import
  * @param importFromId The id of the existing LtmRequestLogProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmRequestLogProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_request_log_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_request_log_profile bigip_ltm_request_log_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmRequestLogProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LtmRequestLogProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_request_log_profile',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultsFrom = config.defaultsFrom;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._proxyResponse = config.proxyResponse;
    this._proxycloseOnError = config.proxycloseOnError;
    this._proxyrespondOnLoggingerror = config.proxyrespondOnLoggingerror;
    this._requestLogging = config.requestLogging;
    this._requestlogErrorPool = config.requestlogErrorPool;
    this._requestlogErrorProtocol = config.requestlogErrorProtocol;
    this._requestlogErrorTemplate = config.requestlogErrorTemplate;
    this._requestlogPool = config.requestlogPool;
    this._requestlogProtocol = config.requestlogProtocol;
    this._requestlogTemplate = config.requestlogTemplate;
    this._responseLogging = config.responseLogging;
    this._responselogErrorPool = config.responselogErrorPool;
    this._responselogErrorProtocol = config.responselogErrorProtocol;
    this._responselogErrorTemplate = config.responselogErrorTemplate;
    this._responselogPool = config.responselogPool;
    this._responselogProtocol = config.responselogProtocol;
    this._responselogTemplate = config.responselogTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaults_from - computed: false, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // proxy_response - computed: false, optional: true, required: false
  private _proxyResponse?: string; 
  public get proxyResponse() {
    return this.getStringAttribute('proxy_response');
  }
  public set proxyResponse(value: string) {
    this._proxyResponse = value;
  }
  public resetProxyResponse() {
    this._proxyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyResponseInput() {
    return this._proxyResponse;
  }

  // proxyclose_on_error - computed: false, optional: true, required: false
  private _proxycloseOnError?: string; 
  public get proxycloseOnError() {
    return this.getStringAttribute('proxyclose_on_error');
  }
  public set proxycloseOnError(value: string) {
    this._proxycloseOnError = value;
  }
  public resetProxycloseOnError() {
    this._proxycloseOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxycloseOnErrorInput() {
    return this._proxycloseOnError;
  }

  // proxyrespond_on_loggingerror - computed: false, optional: true, required: false
  private _proxyrespondOnLoggingerror?: string; 
  public get proxyrespondOnLoggingerror() {
    return this.getStringAttribute('proxyrespond_on_loggingerror');
  }
  public set proxyrespondOnLoggingerror(value: string) {
    this._proxyrespondOnLoggingerror = value;
  }
  public resetProxyrespondOnLoggingerror() {
    this._proxyrespondOnLoggingerror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyrespondOnLoggingerrorInput() {
    return this._proxyrespondOnLoggingerror;
  }

  // request_logging - computed: true, optional: true, required: false
  private _requestLogging?: string; 
  public get requestLogging() {
    return this.getStringAttribute('request_logging');
  }
  public set requestLogging(value: string) {
    this._requestLogging = value;
  }
  public resetRequestLogging() {
    this._requestLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLoggingInput() {
    return this._requestLogging;
  }

  // requestlog_error_pool - computed: false, optional: true, required: false
  private _requestlogErrorPool?: string; 
  public get requestlogErrorPool() {
    return this.getStringAttribute('requestlog_error_pool');
  }
  public set requestlogErrorPool(value: string) {
    this._requestlogErrorPool = value;
  }
  public resetRequestlogErrorPool() {
    this._requestlogErrorPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogErrorPoolInput() {
    return this._requestlogErrorPool;
  }

  // requestlog_error_protocol - computed: false, optional: true, required: false
  private _requestlogErrorProtocol?: string; 
  public get requestlogErrorProtocol() {
    return this.getStringAttribute('requestlog_error_protocol');
  }
  public set requestlogErrorProtocol(value: string) {
    this._requestlogErrorProtocol = value;
  }
  public resetRequestlogErrorProtocol() {
    this._requestlogErrorProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogErrorProtocolInput() {
    return this._requestlogErrorProtocol;
  }

  // requestlog_error_template - computed: false, optional: true, required: false
  private _requestlogErrorTemplate?: string; 
  public get requestlogErrorTemplate() {
    return this.getStringAttribute('requestlog_error_template');
  }
  public set requestlogErrorTemplate(value: string) {
    this._requestlogErrorTemplate = value;
  }
  public resetRequestlogErrorTemplate() {
    this._requestlogErrorTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogErrorTemplateInput() {
    return this._requestlogErrorTemplate;
  }

  // requestlog_pool - computed: false, optional: true, required: false
  private _requestlogPool?: string; 
  public get requestlogPool() {
    return this.getStringAttribute('requestlog_pool');
  }
  public set requestlogPool(value: string) {
    this._requestlogPool = value;
  }
  public resetRequestlogPool() {
    this._requestlogPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogPoolInput() {
    return this._requestlogPool;
  }

  // requestlog_protocol - computed: false, optional: true, required: false
  private _requestlogProtocol?: string; 
  public get requestlogProtocol() {
    return this.getStringAttribute('requestlog_protocol');
  }
  public set requestlogProtocol(value: string) {
    this._requestlogProtocol = value;
  }
  public resetRequestlogProtocol() {
    this._requestlogProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogProtocolInput() {
    return this._requestlogProtocol;
  }

  // requestlog_template - computed: false, optional: true, required: false
  private _requestlogTemplate?: string; 
  public get requestlogTemplate() {
    return this.getStringAttribute('requestlog_template');
  }
  public set requestlogTemplate(value: string) {
    this._requestlogTemplate = value;
  }
  public resetRequestlogTemplate() {
    this._requestlogTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestlogTemplateInput() {
    return this._requestlogTemplate;
  }

  // response_logging - computed: true, optional: true, required: false
  private _responseLogging?: string; 
  public get responseLogging() {
    return this.getStringAttribute('response_logging');
  }
  public set responseLogging(value: string) {
    this._responseLogging = value;
  }
  public resetResponseLogging() {
    this._responseLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLoggingInput() {
    return this._responseLogging;
  }

  // responselog_error_pool - computed: false, optional: true, required: false
  private _responselogErrorPool?: string; 
  public get responselogErrorPool() {
    return this.getStringAttribute('responselog_error_pool');
  }
  public set responselogErrorPool(value: string) {
    this._responselogErrorPool = value;
  }
  public resetResponselogErrorPool() {
    this._responselogErrorPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogErrorPoolInput() {
    return this._responselogErrorPool;
  }

  // responselog_error_protocol - computed: false, optional: true, required: false
  private _responselogErrorProtocol?: string; 
  public get responselogErrorProtocol() {
    return this.getStringAttribute('responselog_error_protocol');
  }
  public set responselogErrorProtocol(value: string) {
    this._responselogErrorProtocol = value;
  }
  public resetResponselogErrorProtocol() {
    this._responselogErrorProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogErrorProtocolInput() {
    return this._responselogErrorProtocol;
  }

  // responselog_error_template - computed: false, optional: true, required: false
  private _responselogErrorTemplate?: string; 
  public get responselogErrorTemplate() {
    return this.getStringAttribute('responselog_error_template');
  }
  public set responselogErrorTemplate(value: string) {
    this._responselogErrorTemplate = value;
  }
  public resetResponselogErrorTemplate() {
    this._responselogErrorTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogErrorTemplateInput() {
    return this._responselogErrorTemplate;
  }

  // responselog_pool - computed: false, optional: true, required: false
  private _responselogPool?: string; 
  public get responselogPool() {
    return this.getStringAttribute('responselog_pool');
  }
  public set responselogPool(value: string) {
    this._responselogPool = value;
  }
  public resetResponselogPool() {
    this._responselogPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogPoolInput() {
    return this._responselogPool;
  }

  // responselog_protocol - computed: false, optional: true, required: false
  private _responselogProtocol?: string; 
  public get responselogProtocol() {
    return this.getStringAttribute('responselog_protocol');
  }
  public set responselogProtocol(value: string) {
    this._responselogProtocol = value;
  }
  public resetResponselogProtocol() {
    this._responselogProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogProtocolInput() {
    return this._responselogProtocol;
  }

  // responselog_template - computed: false, optional: true, required: false
  private _responselogTemplate?: string; 
  public get responselogTemplate() {
    return this.getStringAttribute('responselog_template');
  }
  public set responselogTemplate(value: string) {
    this._responselogTemplate = value;
  }
  public resetResponselogTemplate() {
    this._responselogTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responselogTemplateInput() {
    return this._responselogTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxy_response: cdktf.stringToTerraform(this._proxyResponse),
      proxyclose_on_error: cdktf.stringToTerraform(this._proxycloseOnError),
      proxyrespond_on_loggingerror: cdktf.stringToTerraform(this._proxyrespondOnLoggingerror),
      request_logging: cdktf.stringToTerraform(this._requestLogging),
      requestlog_error_pool: cdktf.stringToTerraform(this._requestlogErrorPool),
      requestlog_error_protocol: cdktf.stringToTerraform(this._requestlogErrorProtocol),
      requestlog_error_template: cdktf.stringToTerraform(this._requestlogErrorTemplate),
      requestlog_pool: cdktf.stringToTerraform(this._requestlogPool),
      requestlog_protocol: cdktf.stringToTerraform(this._requestlogProtocol),
      requestlog_template: cdktf.stringToTerraform(this._requestlogTemplate),
      response_logging: cdktf.stringToTerraform(this._responseLogging),
      responselog_error_pool: cdktf.stringToTerraform(this._responselogErrorPool),
      responselog_error_protocol: cdktf.stringToTerraform(this._responselogErrorProtocol),
      responselog_error_template: cdktf.stringToTerraform(this._responselogErrorTemplate),
      responselog_pool: cdktf.stringToTerraform(this._responselogPool),
      responselog_protocol: cdktf.stringToTerraform(this._responselogProtocol),
      responselog_template: cdktf.stringToTerraform(this._responselogTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_response: {
        value: cdktf.stringToHclTerraform(this._proxyResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyclose_on_error: {
        value: cdktf.stringToHclTerraform(this._proxycloseOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyrespond_on_loggingerror: {
        value: cdktf.stringToHclTerraform(this._proxyrespondOnLoggingerror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_logging: {
        value: cdktf.stringToHclTerraform(this._requestLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_error_pool: {
        value: cdktf.stringToHclTerraform(this._requestlogErrorPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_error_protocol: {
        value: cdktf.stringToHclTerraform(this._requestlogErrorProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_error_template: {
        value: cdktf.stringToHclTerraform(this._requestlogErrorTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_pool: {
        value: cdktf.stringToHclTerraform(this._requestlogPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_protocol: {
        value: cdktf.stringToHclTerraform(this._requestlogProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestlog_template: {
        value: cdktf.stringToHclTerraform(this._requestlogTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_logging: {
        value: cdktf.stringToHclTerraform(this._responseLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_error_pool: {
        value: cdktf.stringToHclTerraform(this._responselogErrorPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_error_protocol: {
        value: cdktf.stringToHclTerraform(this._responselogErrorProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_error_template: {
        value: cdktf.stringToHclTerraform(this._responselogErrorTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_pool: {
        value: cdktf.stringToHclTerraform(this._responselogPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_protocol: {
        value: cdktf.stringToHclTerraform(this._responselogProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responselog_template: {
        value: cdktf.stringToHclTerraform(this._responselogTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
