// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustsecIpToSgtMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mandatory unless `mapping_group` is set or unless `deploy_type` is `ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#deploy_to TrustsecIpToSgtMapping#deploy_to}
  */
  readonly deployTo?: string;
  /**
  * Deploy Type
  *   - Choices: `ALL`, `ND`, `NDG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#deploy_type TrustsecIpToSgtMapping#deploy_type}
  */
  readonly deployType?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#description TrustsecIpToSgtMapping#description}
  */
  readonly description?: string;
  /**
  * Mandatory if `host_name` is empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#host_ip TrustsecIpToSgtMapping#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Mandatory if `host_ip` is empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#host_name TrustsecIpToSgtMapping#host_name}
  */
  readonly hostName?: string;
  /**
  * IP to SGT Mapping Group ID. Mandatory unless `sgt` and `deploy_to` and `deploy_type` are set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#mapping_group TrustsecIpToSgtMapping#mapping_group}
  */
  readonly mappingGroup?: string;
  /**
  * The name of the IP to SGT mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#name TrustsecIpToSgtMapping#name}
  */
  readonly name: string;
  /**
  * Trustsec Security Group ID. Mandatory unless `mapping_group` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#sgt TrustsecIpToSgtMapping#sgt}
  */
  readonly sgt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping ise_trustsec_ip_to_sgt_mapping}
*/
export class TrustsecIpToSgtMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_trustsec_ip_to_sgt_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustsecIpToSgtMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustsecIpToSgtMapping to import
  * @param importFromId The id of the existing TrustsecIpToSgtMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustsecIpToSgtMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_trustsec_ip_to_sgt_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/trustsec_ip_to_sgt_mapping ise_trustsec_ip_to_sgt_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustsecIpToSgtMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TrustsecIpToSgtMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_trustsec_ip_to_sgt_mapping',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployTo = config.deployTo;
    this._deployType = config.deployType;
    this._description = config.description;
    this._hostIp = config.hostIp;
    this._hostName = config.hostName;
    this._mappingGroup = config.mappingGroup;
    this._name = config.name;
    this._sgt = config.sgt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_to - computed: false, optional: true, required: false
  private _deployTo?: string; 
  public get deployTo() {
    return this.getStringAttribute('deploy_to');
  }
  public set deployTo(value: string) {
    this._deployTo = value;
  }
  public resetDeployTo() {
    this._deployTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployToInput() {
    return this._deployTo;
  }

  // deploy_type - computed: false, optional: true, required: false
  private _deployType?: string; 
  public get deployType() {
    return this.getStringAttribute('deploy_type');
  }
  public set deployType(value: string) {
    this._deployType = value;
  }
  public resetDeployType() {
    this._deployType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTypeInput() {
    return this._deployType;
  }

  // description - computed: false, optional: true, required: false
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

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapping_group - computed: false, optional: true, required: false
  private _mappingGroup?: string; 
  public get mappingGroup() {
    return this.getStringAttribute('mapping_group');
  }
  public set mappingGroup(value: string) {
    this._mappingGroup = value;
  }
  public resetMappingGroup() {
    this._mappingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingGroupInput() {
    return this._mappingGroup;
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

  // sgt - computed: false, optional: true, required: false
  private _sgt?: string; 
  public get sgt() {
    return this.getStringAttribute('sgt');
  }
  public set sgt(value: string) {
    this._sgt = value;
  }
  public resetSgt() {
    this._sgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_to: cdktf.stringToTerraform(this._deployTo),
      deploy_type: cdktf.stringToTerraform(this._deployType),
      description: cdktf.stringToTerraform(this._description),
      host_ip: cdktf.stringToTerraform(this._hostIp),
      host_name: cdktf.stringToTerraform(this._hostName),
      mapping_group: cdktf.stringToTerraform(this._mappingGroup),
      name: cdktf.stringToTerraform(this._name),
      sgt: cdktf.stringToTerraform(this._sgt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_to: {
        value: cdktf.stringToHclTerraform(this._deployTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_type: {
        value: cdktf.stringToHclTerraform(this._deployType),
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
      host_ip: {
        value: cdktf.stringToHclTerraform(this._hostIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping_group: {
        value: cdktf.stringToHclTerraform(this._mappingGroup),
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
      sgt: {
        value: cdktf.stringToHclTerraform(this._sgt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
