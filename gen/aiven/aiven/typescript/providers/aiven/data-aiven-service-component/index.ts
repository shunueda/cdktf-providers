// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenServiceComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Service component name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#component DataAivenServiceComponent#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#id DataAivenServiceComponent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kafka authentication method. This is a value specific to the 'kafka' service component. The possible values are `certificate` and `sasl`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#kafka_authentication_method DataAivenServiceComponent#kafka_authentication_method}
  */
  readonly kafkaAuthenticationMethod?: string;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#project DataAivenServiceComponent#project}
  */
  readonly project: string;
  /**
  * Network access route. The possible values are `dynamic`, `private`, `privatelink` and `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#route DataAivenServiceComponent#route}
  */
  readonly route?: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#service_name DataAivenServiceComponent#service_name}
  */
  readonly serviceName?: string;
  /**
  * Whether the endpoint is encrypted or accepts plaintext. By default endpoints are always encrypted and this property is only included for service components that may disable encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#ssl DataAivenServiceComponent#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * DNS usage name. The possible values are `disaster_recovery`, `primary` and `replica`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#usage DataAivenServiceComponent#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component aiven_service_component}
*/
export class DataAivenServiceComponent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenServiceComponent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenServiceComponent to import
  * @param importFromId The id of the existing DataAivenServiceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenServiceComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/service_component aiven_service_component} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenServiceComponentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenServiceComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_component',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._component = config.component;
    this._id = config.id;
    this._kafkaAuthenticationMethod = config.kafkaAuthenticationMethod;
    this._project = config.project;
    this._route = config.route;
    this._serviceName = config.serviceName;
    this._ssl = config.ssl;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // kafka_authentication_method - computed: false, optional: true, required: false
  private _kafkaAuthenticationMethod?: string; 
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }
  public set kafkaAuthenticationMethod(value: string) {
    this._kafkaAuthenticationMethod = value;
  }
  public resetKafkaAuthenticationMethod() {
    this._kafkaAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaAuthenticationMethodInput() {
    return this._kafkaAuthenticationMethod;
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      component: cdktf.stringToTerraform(this._component),
      id: cdktf.stringToTerraform(this._id),
      kafka_authentication_method: cdktf.stringToTerraform(this._kafkaAuthenticationMethod),
      project: cdktf.stringToTerraform(this._project),
      route: cdktf.stringToTerraform(this._route),
      service_name: cdktf.stringToTerraform(this._serviceName),
      ssl: cdktf.booleanToTerraform(this._ssl),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      component: {
        value: cdktf.stringToHclTerraform(this._component),
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
      kafka_authentication_method: {
        value: cdktf.stringToHclTerraform(this._kafkaAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktf.stringToHclTerraform(this._route),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
