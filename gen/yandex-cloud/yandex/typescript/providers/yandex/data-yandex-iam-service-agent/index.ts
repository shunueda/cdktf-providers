// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexIamServiceAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent#cloud_id DataYandexIamServiceAgent#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent#id DataYandexIamServiceAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the service-control microservice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent#microservice_id DataYandexIamServiceAgent#microservice_id}
  */
  readonly microserviceId?: string;
  /**
  * ID of the service-control service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent#service_id DataYandexIamServiceAgent#service_id}
  */
  readonly serviceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent yandex_iam_service_agent}
*/
export class DataYandexIamServiceAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_service_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexIamServiceAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexIamServiceAgent to import
  * @param importFromId The id of the existing DataYandexIamServiceAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexIamServiceAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_service_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/iam_service_agent yandex_iam_service_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexIamServiceAgentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexIamServiceAgentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_service_agent',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudId = config.cloudId;
    this._id = config.id;
    this._microserviceId = config.microserviceId;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_id - computed: true, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
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

  // microservice_id - computed: true, optional: true, required: false
  private _microserviceId?: string; 
  public get microserviceId() {
    return this.getStringAttribute('microservice_id');
  }
  public set microserviceId(value: string) {
    this._microserviceId = value;
  }
  public resetMicroserviceId() {
    this._microserviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceIdInput() {
    return this._microserviceId;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      id: cdktf.stringToTerraform(this._id),
      microservice_id: cdktf.stringToTerraform(this._microserviceId),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
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
      microservice_id: {
        value: cdktf.stringToHclTerraform(this._microserviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
