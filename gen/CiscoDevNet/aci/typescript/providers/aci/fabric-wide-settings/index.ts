// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricWideSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#annotation FabricWideSettings#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#description FabricWideSettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#disable_ep_dampening FabricWideSettings#disable_ep_dampening}
  */
  readonly disableEpDampening?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#domain_validation FabricWideSettings#domain_validation}
  */
  readonly domainValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#enable_mo_streaming FabricWideSettings#enable_mo_streaming}
  */
  readonly enableMoStreaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#enable_remote_leaf_direct FabricWideSettings#enable_remote_leaf_direct}
  */
  readonly enableRemoteLeafDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#enforce_subnet_check FabricWideSettings#enforce_subnet_check}
  */
  readonly enforceSubnetCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#id FabricWideSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#leaf_opflexp_authenticate_clients FabricWideSettings#leaf_opflexp_authenticate_clients}
  */
  readonly leafOpflexpAuthenticateClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#leaf_opflexp_use_ssl FabricWideSettings#leaf_opflexp_use_ssl}
  */
  readonly leafOpflexpUseSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#name FabricWideSettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#name_alias FabricWideSettings#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#opflexp_authenticate_clients FabricWideSettings#opflexp_authenticate_clients}
  */
  readonly opflexpAuthenticateClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#opflexp_ssl_protocols FabricWideSettings#opflexp_ssl_protocols}
  */
  readonly opflexpSslProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#opflexp_use_ssl FabricWideSettings#opflexp_use_ssl}
  */
  readonly opflexpUseSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#policy_sync_node_bringup FabricWideSettings#policy_sync_node_bringup}
  */
  readonly policySyncNodeBringup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#reallocate_gipo FabricWideSettings#reallocate_gipo}
  */
  readonly reallocateGipo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#restrict_infra_vlan_traffic FabricWideSettings#restrict_infra_vlan_traffic}
  */
  readonly restrictInfraVlanTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#unicast_xr_ep_learn_disable FabricWideSettings#unicast_xr_ep_learn_disable}
  */
  readonly unicastXrEpLearnDisable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#validate_overlapping_vlans FabricWideSettings#validate_overlapping_vlans}
  */
  readonly validateOverlappingVlans?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings aci_fabric_wide_settings}
*/
export class FabricWideSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fabric_wide_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricWideSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricWideSettings to import
  * @param importFromId The id of the existing FabricWideSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricWideSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fabric_wide_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fabric_wide_settings aci_fabric_wide_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricWideSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FabricWideSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_fabric_wide_settings',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._disableEpDampening = config.disableEpDampening;
    this._domainValidation = config.domainValidation;
    this._enableMoStreaming = config.enableMoStreaming;
    this._enableRemoteLeafDirect = config.enableRemoteLeafDirect;
    this._enforceSubnetCheck = config.enforceSubnetCheck;
    this._id = config.id;
    this._leafOpflexpAuthenticateClients = config.leafOpflexpAuthenticateClients;
    this._leafOpflexpUseSsl = config.leafOpflexpUseSsl;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._opflexpAuthenticateClients = config.opflexpAuthenticateClients;
    this._opflexpSslProtocols = config.opflexpSslProtocols;
    this._opflexpUseSsl = config.opflexpUseSsl;
    this._policySyncNodeBringup = config.policySyncNodeBringup;
    this._reallocateGipo = config.reallocateGipo;
    this._restrictInfraVlanTraffic = config.restrictInfraVlanTraffic;
    this._unicastXrEpLearnDisable = config.unicastXrEpLearnDisable;
    this._validateOverlappingVlans = config.validateOverlappingVlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // disable_ep_dampening - computed: true, optional: true, required: false
  private _disableEpDampening?: string; 
  public get disableEpDampening() {
    return this.getStringAttribute('disable_ep_dampening');
  }
  public set disableEpDampening(value: string) {
    this._disableEpDampening = value;
  }
  public resetDisableEpDampening() {
    this._disableEpDampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEpDampeningInput() {
    return this._disableEpDampening;
  }

  // domain_validation - computed: true, optional: true, required: false
  private _domainValidation?: string; 
  public get domainValidation() {
    return this.getStringAttribute('domain_validation');
  }
  public set domainValidation(value: string) {
    this._domainValidation = value;
  }
  public resetDomainValidation() {
    this._domainValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainValidationInput() {
    return this._domainValidation;
  }

  // enable_mo_streaming - computed: true, optional: true, required: false
  private _enableMoStreaming?: string; 
  public get enableMoStreaming() {
    return this.getStringAttribute('enable_mo_streaming');
  }
  public set enableMoStreaming(value: string) {
    this._enableMoStreaming = value;
  }
  public resetEnableMoStreaming() {
    this._enableMoStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMoStreamingInput() {
    return this._enableMoStreaming;
  }

  // enable_remote_leaf_direct - computed: true, optional: true, required: false
  private _enableRemoteLeafDirect?: string; 
  public get enableRemoteLeafDirect() {
    return this.getStringAttribute('enable_remote_leaf_direct');
  }
  public set enableRemoteLeafDirect(value: string) {
    this._enableRemoteLeafDirect = value;
  }
  public resetEnableRemoteLeafDirect() {
    this._enableRemoteLeafDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteLeafDirectInput() {
    return this._enableRemoteLeafDirect;
  }

  // enforce_subnet_check - computed: true, optional: true, required: false
  private _enforceSubnetCheck?: string; 
  public get enforceSubnetCheck() {
    return this.getStringAttribute('enforce_subnet_check');
  }
  public set enforceSubnetCheck(value: string) {
    this._enforceSubnetCheck = value;
  }
  public resetEnforceSubnetCheck() {
    this._enforceSubnetCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSubnetCheckInput() {
    return this._enforceSubnetCheck;
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

  // leaf_opflexp_authenticate_clients - computed: true, optional: true, required: false
  private _leafOpflexpAuthenticateClients?: string; 
  public get leafOpflexpAuthenticateClients() {
    return this.getStringAttribute('leaf_opflexp_authenticate_clients');
  }
  public set leafOpflexpAuthenticateClients(value: string) {
    this._leafOpflexpAuthenticateClients = value;
  }
  public resetLeafOpflexpAuthenticateClients() {
    this._leafOpflexpAuthenticateClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafOpflexpAuthenticateClientsInput() {
    return this._leafOpflexpAuthenticateClients;
  }

  // leaf_opflexp_use_ssl - computed: true, optional: true, required: false
  private _leafOpflexpUseSsl?: string; 
  public get leafOpflexpUseSsl() {
    return this.getStringAttribute('leaf_opflexp_use_ssl');
  }
  public set leafOpflexpUseSsl(value: string) {
    this._leafOpflexpUseSsl = value;
  }
  public resetLeafOpflexpUseSsl() {
    this._leafOpflexpUseSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafOpflexpUseSslInput() {
    return this._leafOpflexpUseSsl;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // opflexp_authenticate_clients - computed: true, optional: true, required: false
  private _opflexpAuthenticateClients?: string; 
  public get opflexpAuthenticateClients() {
    return this.getStringAttribute('opflexp_authenticate_clients');
  }
  public set opflexpAuthenticateClients(value: string) {
    this._opflexpAuthenticateClients = value;
  }
  public resetOpflexpAuthenticateClients() {
    this._opflexpAuthenticateClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexpAuthenticateClientsInput() {
    return this._opflexpAuthenticateClients;
  }

  // opflexp_ssl_protocols - computed: true, optional: true, required: false
  private _opflexpSslProtocols?: string[]; 
  public get opflexpSslProtocols() {
    return this.getListAttribute('opflexp_ssl_protocols');
  }
  public set opflexpSslProtocols(value: string[]) {
    this._opflexpSslProtocols = value;
  }
  public resetOpflexpSslProtocols() {
    this._opflexpSslProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexpSslProtocolsInput() {
    return this._opflexpSslProtocols;
  }

  // opflexp_use_ssl - computed: true, optional: true, required: false
  private _opflexpUseSsl?: string; 
  public get opflexpUseSsl() {
    return this.getStringAttribute('opflexp_use_ssl');
  }
  public set opflexpUseSsl(value: string) {
    this._opflexpUseSsl = value;
  }
  public resetOpflexpUseSsl() {
    this._opflexpUseSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexpUseSslInput() {
    return this._opflexpUseSsl;
  }

  // policy_sync_node_bringup - computed: true, optional: true, required: false
  private _policySyncNodeBringup?: string; 
  public get policySyncNodeBringup() {
    return this.getStringAttribute('policy_sync_node_bringup');
  }
  public set policySyncNodeBringup(value: string) {
    this._policySyncNodeBringup = value;
  }
  public resetPolicySyncNodeBringup() {
    this._policySyncNodeBringup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySyncNodeBringupInput() {
    return this._policySyncNodeBringup;
  }

  // reallocate_gipo - computed: true, optional: true, required: false
  private _reallocateGipo?: string; 
  public get reallocateGipo() {
    return this.getStringAttribute('reallocate_gipo');
  }
  public set reallocateGipo(value: string) {
    this._reallocateGipo = value;
  }
  public resetReallocateGipo() {
    this._reallocateGipo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reallocateGipoInput() {
    return this._reallocateGipo;
  }

  // restrict_infra_vlan_traffic - computed: true, optional: true, required: false
  private _restrictInfraVlanTraffic?: string; 
  public get restrictInfraVlanTraffic() {
    return this.getStringAttribute('restrict_infra_vlan_traffic');
  }
  public set restrictInfraVlanTraffic(value: string) {
    this._restrictInfraVlanTraffic = value;
  }
  public resetRestrictInfraVlanTraffic() {
    this._restrictInfraVlanTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictInfraVlanTrafficInput() {
    return this._restrictInfraVlanTraffic;
  }

  // unicast_xr_ep_learn_disable - computed: true, optional: true, required: false
  private _unicastXrEpLearnDisable?: string; 
  public get unicastXrEpLearnDisable() {
    return this.getStringAttribute('unicast_xr_ep_learn_disable');
  }
  public set unicastXrEpLearnDisable(value: string) {
    this._unicastXrEpLearnDisable = value;
  }
  public resetUnicastXrEpLearnDisable() {
    this._unicastXrEpLearnDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastXrEpLearnDisableInput() {
    return this._unicastXrEpLearnDisable;
  }

  // validate_overlapping_vlans - computed: true, optional: true, required: false
  private _validateOverlappingVlans?: string; 
  public get validateOverlappingVlans() {
    return this.getStringAttribute('validate_overlapping_vlans');
  }
  public set validateOverlappingVlans(value: string) {
    this._validateOverlappingVlans = value;
  }
  public resetValidateOverlappingVlans() {
    this._validateOverlappingVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOverlappingVlansInput() {
    return this._validateOverlappingVlans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      disable_ep_dampening: cdktf.stringToTerraform(this._disableEpDampening),
      domain_validation: cdktf.stringToTerraform(this._domainValidation),
      enable_mo_streaming: cdktf.stringToTerraform(this._enableMoStreaming),
      enable_remote_leaf_direct: cdktf.stringToTerraform(this._enableRemoteLeafDirect),
      enforce_subnet_check: cdktf.stringToTerraform(this._enforceSubnetCheck),
      id: cdktf.stringToTerraform(this._id),
      leaf_opflexp_authenticate_clients: cdktf.stringToTerraform(this._leafOpflexpAuthenticateClients),
      leaf_opflexp_use_ssl: cdktf.stringToTerraform(this._leafOpflexpUseSsl),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      opflexp_authenticate_clients: cdktf.stringToTerraform(this._opflexpAuthenticateClients),
      opflexp_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._opflexpSslProtocols),
      opflexp_use_ssl: cdktf.stringToTerraform(this._opflexpUseSsl),
      policy_sync_node_bringup: cdktf.stringToTerraform(this._policySyncNodeBringup),
      reallocate_gipo: cdktf.stringToTerraform(this._reallocateGipo),
      restrict_infra_vlan_traffic: cdktf.stringToTerraform(this._restrictInfraVlanTraffic),
      unicast_xr_ep_learn_disable: cdktf.stringToTerraform(this._unicastXrEpLearnDisable),
      validate_overlapping_vlans: cdktf.stringToTerraform(this._validateOverlappingVlans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      disable_ep_dampening: {
        value: cdktf.stringToHclTerraform(this._disableEpDampening),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_validation: {
        value: cdktf.stringToHclTerraform(this._domainValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_mo_streaming: {
        value: cdktf.stringToHclTerraform(this._enableMoStreaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_remote_leaf_direct: {
        value: cdktf.stringToHclTerraform(this._enableRemoteLeafDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_subnet_check: {
        value: cdktf.stringToHclTerraform(this._enforceSubnetCheck),
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
      leaf_opflexp_authenticate_clients: {
        value: cdktf.stringToHclTerraform(this._leafOpflexpAuthenticateClients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leaf_opflexp_use_ssl: {
        value: cdktf.stringToHclTerraform(this._leafOpflexpUseSsl),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opflexp_authenticate_clients: {
        value: cdktf.stringToHclTerraform(this._opflexpAuthenticateClients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opflexp_ssl_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._opflexpSslProtocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opflexp_use_ssl: {
        value: cdktf.stringToHclTerraform(this._opflexpUseSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_sync_node_bringup: {
        value: cdktf.stringToHclTerraform(this._policySyncNodeBringup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reallocate_gipo: {
        value: cdktf.stringToHclTerraform(this._reallocateGipo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_infra_vlan_traffic: {
        value: cdktf.stringToHclTerraform(this._restrictInfraVlanTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_xr_ep_learn_disable: {
        value: cdktf.stringToHclTerraform(this._unicastXrEpLearnDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_overlapping_vlans: {
        value: cdktf.stringToHclTerraform(this._validateOverlappingVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
