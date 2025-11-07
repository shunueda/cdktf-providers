// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#delay ProxyDeployment#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#environment_name ProxyDeployment#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#id ProxyDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#proxy_name ProxyDeployment#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#revision ProxyDeployment#revision}
  */
  readonly revision: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#service_account ProxyDeployment#service_account}
  */
  readonly serviceAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment apigee_proxy_deployment}
*/
export class ProxyDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_proxy_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyDeployment to import
  * @param importFromId The id of the existing ProxyDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_proxy_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/proxy_deployment apigee_proxy_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_proxy_deployment',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delay = config.delay;
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._proxyName = config.proxyName;
    this._revision = config.revision;
    this._serviceAccount = config.serviceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // proxy_name - computed: false, optional: false, required: true
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.numberToTerraform(this._delay),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      revision: cdktf.numberToTerraform(this._revision),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
