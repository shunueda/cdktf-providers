// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address (IPv4 or IPv6 depending on the node) of the application node to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#address AppNode#address}
  */
  readonly address?: string;
  /**
  * The name of the application associated to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#application AppNode#application}
  */
  readonly application: string;
  /**
  * The healthcheck failback threshold for the application node to create (Supported: 1-10; Default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#failback_threshold AppNode#failback_threshold}
  */
  readonly failbackThreshold?: number;
  /**
  * The healthcheck failure threshold for the application node to create (Supported: 1-10; Default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#failure_threshold AppNode#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The fqdn of the application associated to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#fqdn AppNode#fqdn}
  */
  readonly fqdn: string;
  /**
  * The healthcheck name for the application node to create (Supported: ok,ping,tcp,http; Default: ok).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#healthcheck AppNode#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * The healthcheck frequency in second for the application node to create (Supported: 10,30,60,300; Default: 60).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#healthcheck_frequency AppNode#healthcheck_frequency}
  */
  readonly healthcheckFrequency?: number;
  /**
  * The healthcheck parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#healthcheck_parameters AppNode#healthcheck_parameters}
  */
  readonly healthcheckParameters?: { [key: string]: string };
  /**
  * The healthcheck timeout in second for the application node to create (Supported: 1-10; Default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#healthcheck_timeout AppNode#healthcheck_timeout}
  */
  readonly healthcheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#id AppNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the application node to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#name AppNode#name}
  */
  readonly name: string;
  /**
  * The name of the application pool associated to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#pool AppNode#pool}
  */
  readonly pool: string;
  /**
  * The weight of the application node to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#weight AppNode#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node solidserver_app_node}
*/
export class AppNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_app_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppNode to import
  * @param importFromId The id of the existing AppNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_app_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/app_node solidserver_app_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppNodeConfig
  */
  public constructor(scope: Construct, id: string, config: AppNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_app_node',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25',
        providerVersionConstraint: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._application = config.application;
    this._failbackThreshold = config.failbackThreshold;
    this._failureThreshold = config.failureThreshold;
    this._fqdn = config.fqdn;
    this._healthcheck = config.healthcheck;
    this._healthcheckFrequency = config.healthcheckFrequency;
    this._healthcheckParameters = config.healthcheckParameters;
    this._healthcheckTimeout = config.healthcheckTimeout;
    this._id = config.id;
    this._name = config.name;
    this._pool = config.pool;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // failback_threshold - computed: false, optional: true, required: false
  private _failbackThreshold?: number; 
  public get failbackThreshold() {
    return this.getNumberAttribute('failback_threshold');
  }
  public set failbackThreshold(value: number) {
    this._failbackThreshold = value;
  }
  public resetFailbackThreshold() {
    this._failbackThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failbackThresholdInput() {
    return this._failbackThreshold;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: string; 
  public get healthcheck() {
    return this.getStringAttribute('healthcheck');
  }
  public set healthcheck(value: string) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // healthcheck_frequency - computed: false, optional: true, required: false
  private _healthcheckFrequency?: number; 
  public get healthcheckFrequency() {
    return this.getNumberAttribute('healthcheck_frequency');
  }
  public set healthcheckFrequency(value: number) {
    this._healthcheckFrequency = value;
  }
  public resetHealthcheckFrequency() {
    this._healthcheckFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckFrequencyInput() {
    return this._healthcheckFrequency;
  }

  // healthcheck_parameters - computed: false, optional: true, required: false
  private _healthcheckParameters?: { [key: string]: string }; 
  public get healthcheckParameters() {
    return this.getStringMapAttribute('healthcheck_parameters');
  }
  public set healthcheckParameters(value: { [key: string]: string }) {
    this._healthcheckParameters = value;
  }
  public resetHealthcheckParameters() {
    this._healthcheckParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckParametersInput() {
    return this._healthcheckParameters;
  }

  // healthcheck_timeout - computed: false, optional: true, required: false
  private _healthcheckTimeout?: number; 
  public get healthcheckTimeout() {
    return this.getNumberAttribute('healthcheck_timeout');
  }
  public set healthcheckTimeout(value: number) {
    this._healthcheckTimeout = value;
  }
  public resetHealthcheckTimeout() {
    this._healthcheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckTimeoutInput() {
    return this._healthcheckTimeout;
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

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      application: cdktf.stringToTerraform(this._application),
      failback_threshold: cdktf.numberToTerraform(this._failbackThreshold),
      failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      healthcheck: cdktf.stringToTerraform(this._healthcheck),
      healthcheck_frequency: cdktf.numberToTerraform(this._healthcheckFrequency),
      healthcheck_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._healthcheckParameters),
      healthcheck_timeout: cdktf.numberToTerraform(this._healthcheckTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pool: cdktf.stringToTerraform(this._pool),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failback_threshold: {
        value: cdktf.numberToHclTerraform(this._failbackThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_threshold: {
        value: cdktf.numberToHclTerraform(this._failureThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheck: {
        value: cdktf.stringToHclTerraform(this._healthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheck_frequency: {
        value: cdktf.numberToHclTerraform(this._healthcheckFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthcheck_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._healthcheckParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      healthcheck_timeout: {
        value: cdktf.numberToHclTerraform(this._healthcheckTimeout),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
