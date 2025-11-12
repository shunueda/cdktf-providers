// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Compute services. This field is only required if you are linking Compute services to the Next-Gen WAF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment#authorized_services EdgeDeployment#authorized_services}
  */
  readonly authorizedServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment#id EdgeDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment#site_short_name EdgeDeployment#site_short_name}
  */
  readonly siteShortName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment sigsci_edge_deployment}
*/
export class EdgeDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_edge_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeDeployment to import
  * @param importFromId The id of the existing EdgeDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_edge_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/edge_deployment sigsci_edge_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_edge_deployment',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1',
        providerVersionConstraint: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedServices = config.authorizedServices;
    this._id = config.id;
    this._siteShortName = config.siteShortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_services - computed: false, optional: true, required: false
  private _authorizedServices?: string[]; 
  public get authorizedServices() {
    return this.getListAttribute('authorized_services');
  }
  public set authorizedServices(value: string[]) {
    this._authorizedServices = value;
  }
  public resetAuthorizedServices() {
    this._authorizedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedServicesInput() {
    return this._authorizedServices;
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

  // site_short_name - computed: false, optional: false, required: true
  private _siteShortName?: string; 
  public get siteShortName() {
    return this.getStringAttribute('site_short_name');
  }
  public set siteShortName(value: string) {
    this._siteShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteShortNameInput() {
    return this._siteShortName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedServices),
      id: cdktf.stringToTerraform(this._id),
      site_short_name: cdktf.stringToTerraform(this._siteShortName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_short_name: {
        value: cdktf.stringToHclTerraform(this._siteShortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
