// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#consortium_id Service#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#details Service#details}
  */
  readonly details?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#details_json Service#details_json}
  */
  readonly detailsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#environment_id Service#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#membership_id Service#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#service_type Service#service_type}
  */
  readonly serviceType: string;
  /**
  * The decentralized nature of Kaleido means a utility service might be shared with other accounts. When true only create if service_type does not exist, and delete becomes a no-op.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#shared_deployment Service#shared_deployment}
  */
  readonly sharedDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#size Service#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#update_trigger Service#update_trigger}
  */
  readonly updateTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#zone_id Service#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service kaleido_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/service kaleido_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_service',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consortiumId = config.consortiumId;
    this._details = config.details;
    this._detailsJson = config.detailsJson;
    this._environmentId = config.environmentId;
    this._membershipId = config.membershipId;
    this._name = config.name;
    this._serviceType = config.serviceType;
    this._sharedDeployment = config.sharedDeployment;
    this._size = config.size;
    this._updateTrigger = config.updateTrigger;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
  }

  // details - computed: false, optional: true, required: false
  private _details?: { [key: string]: string }; 
  public get details() {
    return this.getStringMapAttribute('details');
  }
  public set details(value: { [key: string]: string }) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // details_json - computed: false, optional: true, required: false
  private _detailsJson?: string; 
  public get detailsJson() {
    return this.getStringAttribute('details_json');
  }
  public set detailsJson(value: string) {
    this._detailsJson = value;
  }
  public resetDetailsJson() {
    this._detailsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsJsonInput() {
    return this._detailsJson;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // https_url - computed: true, optional: false, required: false
  public get httpsUrl() {
    return this.getStringAttribute('https_url');
  }

  // hybrid_port_allocation - computed: true, optional: false, required: false
  public get hybridPortAllocation() {
    return this.getNumberAttribute('hybrid_port_allocation');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
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

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // shared_deployment - computed: true, optional: true, required: false
  private _sharedDeployment?: boolean | cdktf.IResolvable; 
  public get sharedDeployment() {
    return this.getBooleanAttribute('shared_deployment');
  }
  public set sharedDeployment(value: boolean | cdktf.IResolvable) {
    this._sharedDeployment = value;
  }
  public resetSharedDeployment() {
    this._sharedDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDeploymentInput() {
    return this._sharedDeployment;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // update_trigger - computed: false, optional: true, required: false
  private _updateTrigger?: string; 
  public get updateTrigger() {
    return this.getStringAttribute('update_trigger');
  }
  public set updateTrigger(value: string) {
    this._updateTrigger = value;
  }
  public resetUpdateTrigger() {
    this._updateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerInput() {
    return this._updateTrigger;
  }

  // urls - computed: true, optional: false, required: false
  private _urls = new cdktf.StringMap(this, "urls");
  public get urls() {
    return this._urls;
  }

  // websocket_url - computed: true, optional: false, required: false
  public get websocketUrl() {
    return this.getStringAttribute('websocket_url');
  }

  // webui_url - computed: true, optional: false, required: false
  public get webuiUrl() {
    return this.getStringAttribute('webui_url');
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      details: cdktf.hashMapper(cdktf.stringToTerraform)(this._details),
      details_json: cdktf.stringToTerraform(this._detailsJson),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      name: cdktf.stringToTerraform(this._name),
      service_type: cdktf.stringToTerraform(this._serviceType),
      shared_deployment: cdktf.booleanToTerraform(this._sharedDeployment),
      size: cdktf.stringToTerraform(this._size),
      update_trigger: cdktf.stringToTerraform(this._updateTrigger),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._details),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      details_json: {
        value: cdktf.stringToHclTerraform(this._detailsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_id: {
        value: cdktf.stringToHclTerraform(this._membershipId),
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
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_deployment: {
        value: cdktf.booleanToHclTerraform(this._sharedDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_trigger: {
        value: cdktf.stringToHclTerraform(this._updateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
