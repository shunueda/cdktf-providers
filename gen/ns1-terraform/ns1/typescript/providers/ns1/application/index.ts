// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#active Application#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#browser_wait_millis Application#browser_wait_millis}
  */
  readonly browserWaitMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#jobs_per_transaction Application#jobs_per_transaction}
  */
  readonly jobsPerTransaction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * default_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#default_config Application#default_config}
  */
  readonly defaultConfig?: ApplicationDefaultConfig;
}
export interface ApplicationDefaultConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#http Application#http}
  */
  readonly http: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#https Application#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#job_timeout_millis Application#job_timeout_millis}
  */
  readonly jobTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#request_timeout_millis Application#request_timeout_millis}
  */
  readonly requestTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#static_values Application#static_values}
  */
  readonly staticValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#use_xhr Application#use_xhr}
  */
  readonly useXhr?: boolean | cdktf.IResolvable;
}

export function applicationDefaultConfigToTerraform(struct?: ApplicationDefaultConfigOutputReference | ApplicationDefaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.booleanToTerraform(struct!.http),
    https: cdktf.booleanToTerraform(struct!.https),
    job_timeout_millis: cdktf.numberToTerraform(struct!.jobTimeoutMillis),
    request_timeout_millis: cdktf.numberToTerraform(struct!.requestTimeoutMillis),
    static_values: cdktf.booleanToTerraform(struct!.staticValues),
    use_xhr: cdktf.booleanToTerraform(struct!.useXhr),
  }
}


export function applicationDefaultConfigToHclTerraform(struct?: ApplicationDefaultConfigOutputReference | ApplicationDefaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.booleanToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    https: {
      value: cdktf.booleanToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.jobTimeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_values: {
      value: cdktf.booleanToHclTerraform(struct!.staticValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_xhr: {
      value: cdktf.booleanToHclTerraform(struct!.useXhr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDefaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDefaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._jobTimeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeoutMillis = this._jobTimeoutMillis;
    }
    if (this._requestTimeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeoutMillis = this._requestTimeoutMillis;
    }
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._useXhr !== undefined) {
      hasAnyValues = true;
      internalValueResult.useXhr = this._useXhr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDefaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http = undefined;
      this._https = undefined;
      this._jobTimeoutMillis = undefined;
      this._requestTimeoutMillis = undefined;
      this._staticValues = undefined;
      this._useXhr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http = value.http;
      this._https = value.https;
      this._jobTimeoutMillis = value.jobTimeoutMillis;
      this._requestTimeoutMillis = value.requestTimeoutMillis;
      this._staticValues = value.staticValues;
      this._useXhr = value.useXhr;
    }
  }

  // http - computed: false, optional: false, required: true
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // job_timeout_millis - computed: false, optional: true, required: false
  private _jobTimeoutMillis?: number; 
  public get jobTimeoutMillis() {
    return this.getNumberAttribute('job_timeout_millis');
  }
  public set jobTimeoutMillis(value: number) {
    this._jobTimeoutMillis = value;
  }
  public resetJobTimeoutMillis() {
    this._jobTimeoutMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutMillisInput() {
    return this._jobTimeoutMillis;
  }

  // request_timeout_millis - computed: false, optional: true, required: false
  private _requestTimeoutMillis?: number; 
  public get requestTimeoutMillis() {
    return this.getNumberAttribute('request_timeout_millis');
  }
  public set requestTimeoutMillis(value: number) {
    this._requestTimeoutMillis = value;
  }
  public resetRequestTimeoutMillis() {
    this._requestTimeoutMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutMillisInput() {
    return this._requestTimeoutMillis;
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: boolean | cdktf.IResolvable; 
  public get staticValues() {
    return this.getBooleanAttribute('static_values');
  }
  public set staticValues(value: boolean | cdktf.IResolvable) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // use_xhr - computed: false, optional: true, required: false
  private _useXhr?: boolean | cdktf.IResolvable; 
  public get useXhr() {
    return this.getBooleanAttribute('use_xhr');
  }
  public set useXhr(value: boolean | cdktf.IResolvable) {
    this._useXhr = value;
  }
  public resetUseXhr() {
    this._useXhr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useXhrInput() {
    return this._useXhr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application ns1_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/application ns1_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_application',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._browserWaitMillis = config.browserWaitMillis;
    this._id = config.id;
    this._jobsPerTransaction = config.jobsPerTransaction;
    this._name = config.name;
    this._defaultConfig.internalValue = config.defaultConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // browser_wait_millis - computed: false, optional: true, required: false
  private _browserWaitMillis?: number; 
  public get browserWaitMillis() {
    return this.getNumberAttribute('browser_wait_millis');
  }
  public set browserWaitMillis(value: number) {
    this._browserWaitMillis = value;
  }
  public resetBrowserWaitMillis() {
    this._browserWaitMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserWaitMillisInput() {
    return this._browserWaitMillis;
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

  // jobs_per_transaction - computed: false, optional: true, required: false
  private _jobsPerTransaction?: number; 
  public get jobsPerTransaction() {
    return this.getNumberAttribute('jobs_per_transaction');
  }
  public set jobsPerTransaction(value: number) {
    this._jobsPerTransaction = value;
  }
  public resetJobsPerTransaction() {
    this._jobsPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsPerTransactionInput() {
    return this._jobsPerTransaction;
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

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig = new ApplicationDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: ApplicationDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      browser_wait_millis: cdktf.numberToTerraform(this._browserWaitMillis),
      id: cdktf.stringToTerraform(this._id),
      jobs_per_transaction: cdktf.numberToTerraform(this._jobsPerTransaction),
      name: cdktf.stringToTerraform(this._name),
      default_config: applicationDefaultConfigToTerraform(this._defaultConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      browser_wait_millis: {
        value: cdktf.numberToHclTerraform(this._browserWaitMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jobs_per_transaction: {
        value: cdktf.numberToHclTerraform(this._jobsPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_config: {
        value: applicationDefaultConfigToHclTerraform(this._defaultConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationDefaultConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
