// generated from terraform resource schema

import { Mk8SStatusList, 
Mk8SAddOns, 
mk8SAddOnsToTerraform, 
mk8SAddOnsToHclTerraform, 
Mk8SAddOnsList, 
Mk8SAwsProvider, 
mk8SAwsProviderToTerraform, 
mk8SAwsProviderToHclTerraform, 
Mk8SAwsProviderList, 
Mk8SAzureProvider, 
mk8SAzureProviderToTerraform, 
mk8SAzureProviderToHclTerraform, 
Mk8SAzureProviderList, 
Mk8SDigitalOceanProvider, 
mk8SDigitalOceanProviderToTerraform, 
mk8SDigitalOceanProviderToHclTerraform, 
Mk8SDigitalOceanProviderList, 
Mk8SEphemeralProvider, 
mk8SEphemeralProviderToTerraform, 
mk8SEphemeralProviderToHclTerraform, 
Mk8SEphemeralProviderList, 
Mk8SFirewall, 
mk8SFirewallToTerraform, 
mk8SFirewallToHclTerraform, 
Mk8SFirewallList, 
Mk8SGcpProvider, 
mk8SGcpProviderToTerraform, 
mk8SGcpProviderToHclTerraform, 
Mk8SGcpProviderList, 
Mk8SGenericProvider, 
mk8SGenericProviderToTerraform, 
mk8SGenericProviderToHclTerraform, 
Mk8SGenericProviderList, 
Mk8SHetznerProvider, 
mk8SHetznerProviderToTerraform, 
mk8SHetznerProviderToHclTerraform, 
Mk8SHetznerProviderList, 
Mk8SLambdalabsProvider, 
mk8SLambdalabsProviderToTerraform, 
mk8SLambdalabsProviderToHclTerraform, 
Mk8SLambdalabsProviderList, 
Mk8SLinodeProvider, 
mk8SLinodeProviderToTerraform, 
mk8SLinodeProviderToHclTerraform, 
Mk8SLinodeProviderList, 
Mk8SOblivusProvider, 
mk8SOblivusProviderToTerraform, 
mk8SOblivusProviderToHclTerraform, 
Mk8SOblivusProviderList, 
Mk8SPaperspaceProvider, 
mk8SPaperspaceProviderToTerraform, 
mk8SPaperspaceProviderToHclTerraform, 
Mk8SPaperspaceProviderList, 
Mk8STritonProvider, 
mk8STritonProviderToTerraform, 
mk8STritonProviderToHclTerraform, 
Mk8STritonProviderList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Mk8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the mk8s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#description Mk8S#description}
  */
  readonly description?: string;
  /**
  * Name of the mk8s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#tags Mk8S#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#version Mk8S#version}
  */
  readonly version: string;
  /**
  * add_ons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#add_ons Mk8S#add_ons}
  */
  readonly addOns?: Mk8SAddOns[] | cdktf.IResolvable;
  /**
  * aws_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_provider Mk8S#aws_provider}
  */
  readonly awsProvider?: Mk8SAwsProvider[] | cdktf.IResolvable;
  /**
  * azure_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#azure_provider Mk8S#azure_provider}
  */
  readonly azureProvider?: Mk8SAzureProvider[] | cdktf.IResolvable;
  /**
  * digital_ocean_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#digital_ocean_provider Mk8S#digital_ocean_provider}
  */
  readonly digitalOceanProvider?: Mk8SDigitalOceanProvider[] | cdktf.IResolvable;
  /**
  * ephemeral_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ephemeral_provider Mk8S#ephemeral_provider}
  */
  readonly ephemeralProvider?: Mk8SEphemeralProvider[] | cdktf.IResolvable;
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#firewall Mk8S#firewall}
  */
  readonly firewall?: Mk8SFirewall[] | cdktf.IResolvable;
  /**
  * gcp_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#gcp_provider Mk8S#gcp_provider}
  */
  readonly gcpProvider?: Mk8SGcpProvider[] | cdktf.IResolvable;
  /**
  * generic_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#generic_provider Mk8S#generic_provider}
  */
  readonly genericProvider?: Mk8SGenericProvider[] | cdktf.IResolvable;
  /**
  * hetzner_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#hetzner_provider Mk8S#hetzner_provider}
  */
  readonly hetznerProvider?: Mk8SHetznerProvider[] | cdktf.IResolvable;
  /**
  * lambdalabs_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#lambdalabs_provider Mk8S#lambdalabs_provider}
  */
  readonly lambdalabsProvider?: Mk8SLambdalabsProvider[] | cdktf.IResolvable;
  /**
  * linode_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#linode_provider Mk8S#linode_provider}
  */
  readonly linodeProvider?: Mk8SLinodeProvider[] | cdktf.IResolvable;
  /**
  * oblivus_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#oblivus_provider Mk8S#oblivus_provider}
  */
  readonly oblivusProvider?: Mk8SOblivusProvider[] | cdktf.IResolvable;
  /**
  * paperspace_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#paperspace_provider Mk8S#paperspace_provider}
  */
  readonly paperspaceProvider?: Mk8SPaperspaceProvider[] | cdktf.IResolvable;
  /**
  * triton_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#triton_provider Mk8S#triton_provider}
  */
  readonly tritonProvider?: Mk8STritonProvider[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s cpln_mk8s}
*/
export class Mk8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_mk8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mk8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mk8S to import
  * @param importFromId The id of the existing Mk8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mk8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_mk8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s cpln_mk8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Mk8SConfig
  */
  public constructor(scope: Construct, id: string, config: Mk8SConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_mk8s',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.19',
        providerVersionConstraint: '1.2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._version = config.version;
    this._addOns.internalValue = config.addOns;
    this._awsProvider.internalValue = config.awsProvider;
    this._azureProvider.internalValue = config.azureProvider;
    this._digitalOceanProvider.internalValue = config.digitalOceanProvider;
    this._ephemeralProvider.internalValue = config.ephemeralProvider;
    this._firewall.internalValue = config.firewall;
    this._gcpProvider.internalValue = config.gcpProvider;
    this._genericProvider.internalValue = config.genericProvider;
    this._hetznerProvider.internalValue = config.hetznerProvider;
    this._lambdalabsProvider.internalValue = config.lambdalabsProvider;
    this._linodeProvider.internalValue = config.linodeProvider;
    this._oblivusProvider.internalValue = config.oblivusProvider;
    this._paperspaceProvider.internalValue = config.paperspaceProvider;
    this._tritonProvider.internalValue = config.tritonProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new Mk8SStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // add_ons - computed: false, optional: true, required: false
  private _addOns = new Mk8SAddOnsList(this, "add_ons", false);
  public get addOns() {
    return this._addOns;
  }
  public putAddOns(value: Mk8SAddOns[] | cdktf.IResolvable) {
    this._addOns.internalValue = value;
  }
  public resetAddOns() {
    this._addOns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnsInput() {
    return this._addOns.internalValue;
  }

  // aws_provider - computed: false, optional: true, required: false
  private _awsProvider = new Mk8SAwsProviderList(this, "aws_provider", false);
  public get awsProvider() {
    return this._awsProvider;
  }
  public putAwsProvider(value: Mk8SAwsProvider[] | cdktf.IResolvable) {
    this._awsProvider.internalValue = value;
  }
  public resetAwsProvider() {
    this._awsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProviderInput() {
    return this._awsProvider.internalValue;
  }

  // azure_provider - computed: false, optional: true, required: false
  private _azureProvider = new Mk8SAzureProviderList(this, "azure_provider", false);
  public get azureProvider() {
    return this._azureProvider;
  }
  public putAzureProvider(value: Mk8SAzureProvider[] | cdktf.IResolvable) {
    this._azureProvider.internalValue = value;
  }
  public resetAzureProvider() {
    this._azureProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureProviderInput() {
    return this._azureProvider.internalValue;
  }

  // digital_ocean_provider - computed: false, optional: true, required: false
  private _digitalOceanProvider = new Mk8SDigitalOceanProviderList(this, "digital_ocean_provider", false);
  public get digitalOceanProvider() {
    return this._digitalOceanProvider;
  }
  public putDigitalOceanProvider(value: Mk8SDigitalOceanProvider[] | cdktf.IResolvable) {
    this._digitalOceanProvider.internalValue = value;
  }
  public resetDigitalOceanProvider() {
    this._digitalOceanProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalOceanProviderInput() {
    return this._digitalOceanProvider.internalValue;
  }

  // ephemeral_provider - computed: false, optional: true, required: false
  private _ephemeralProvider = new Mk8SEphemeralProviderList(this, "ephemeral_provider", false);
  public get ephemeralProvider() {
    return this._ephemeralProvider;
  }
  public putEphemeralProvider(value: Mk8SEphemeralProvider[] | cdktf.IResolvable) {
    this._ephemeralProvider.internalValue = value;
  }
  public resetEphemeralProvider() {
    this._ephemeralProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralProviderInput() {
    return this._ephemeralProvider.internalValue;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall = new Mk8SFirewallList(this, "firewall", true);
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: Mk8SFirewall[] | cdktf.IResolvable) {
    this._firewall.internalValue = value;
  }
  public resetFirewall() {
    this._firewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
  }

  // gcp_provider - computed: false, optional: true, required: false
  private _gcpProvider = new Mk8SGcpProviderList(this, "gcp_provider", false);
  public get gcpProvider() {
    return this._gcpProvider;
  }
  public putGcpProvider(value: Mk8SGcpProvider[] | cdktf.IResolvable) {
    this._gcpProvider.internalValue = value;
  }
  public resetGcpProvider() {
    this._gcpProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProviderInput() {
    return this._gcpProvider.internalValue;
  }

  // generic_provider - computed: false, optional: true, required: false
  private _genericProvider = new Mk8SGenericProviderList(this, "generic_provider", false);
  public get genericProvider() {
    return this._genericProvider;
  }
  public putGenericProvider(value: Mk8SGenericProvider[] | cdktf.IResolvable) {
    this._genericProvider.internalValue = value;
  }
  public resetGenericProvider() {
    this._genericProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericProviderInput() {
    return this._genericProvider.internalValue;
  }

  // hetzner_provider - computed: false, optional: true, required: false
  private _hetznerProvider = new Mk8SHetznerProviderList(this, "hetzner_provider", false);
  public get hetznerProvider() {
    return this._hetznerProvider;
  }
  public putHetznerProvider(value: Mk8SHetznerProvider[] | cdktf.IResolvable) {
    this._hetznerProvider.internalValue = value;
  }
  public resetHetznerProvider() {
    this._hetznerProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hetznerProviderInput() {
    return this._hetznerProvider.internalValue;
  }

  // lambdalabs_provider - computed: false, optional: true, required: false
  private _lambdalabsProvider = new Mk8SLambdalabsProviderList(this, "lambdalabs_provider", false);
  public get lambdalabsProvider() {
    return this._lambdalabsProvider;
  }
  public putLambdalabsProvider(value: Mk8SLambdalabsProvider[] | cdktf.IResolvable) {
    this._lambdalabsProvider.internalValue = value;
  }
  public resetLambdalabsProvider() {
    this._lambdalabsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdalabsProviderInput() {
    return this._lambdalabsProvider.internalValue;
  }

  // linode_provider - computed: false, optional: true, required: false
  private _linodeProvider = new Mk8SLinodeProviderList(this, "linode_provider", false);
  public get linodeProvider() {
    return this._linodeProvider;
  }
  public putLinodeProvider(value: Mk8SLinodeProvider[] | cdktf.IResolvable) {
    this._linodeProvider.internalValue = value;
  }
  public resetLinodeProvider() {
    this._linodeProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeProviderInput() {
    return this._linodeProvider.internalValue;
  }

  // oblivus_provider - computed: false, optional: true, required: false
  private _oblivusProvider = new Mk8SOblivusProviderList(this, "oblivus_provider", false);
  public get oblivusProvider() {
    return this._oblivusProvider;
  }
  public putOblivusProvider(value: Mk8SOblivusProvider[] | cdktf.IResolvable) {
    this._oblivusProvider.internalValue = value;
  }
  public resetOblivusProvider() {
    this._oblivusProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oblivusProviderInput() {
    return this._oblivusProvider.internalValue;
  }

  // paperspace_provider - computed: false, optional: true, required: false
  private _paperspaceProvider = new Mk8SPaperspaceProviderList(this, "paperspace_provider", false);
  public get paperspaceProvider() {
    return this._paperspaceProvider;
  }
  public putPaperspaceProvider(value: Mk8SPaperspaceProvider[] | cdktf.IResolvable) {
    this._paperspaceProvider.internalValue = value;
  }
  public resetPaperspaceProvider() {
    this._paperspaceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperspaceProviderInput() {
    return this._paperspaceProvider.internalValue;
  }

  // triton_provider - computed: false, optional: true, required: false
  private _tritonProvider = new Mk8STritonProviderList(this, "triton_provider", false);
  public get tritonProvider() {
    return this._tritonProvider;
  }
  public putTritonProvider(value: Mk8STritonProvider[] | cdktf.IResolvable) {
    this._tritonProvider.internalValue = value;
  }
  public resetTritonProvider() {
    this._tritonProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tritonProviderInput() {
    return this._tritonProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      add_ons: cdktf.listMapper(mk8SAddOnsToTerraform, true)(this._addOns.internalValue),
      aws_provider: cdktf.listMapper(mk8SAwsProviderToTerraform, true)(this._awsProvider.internalValue),
      azure_provider: cdktf.listMapper(mk8SAzureProviderToTerraform, true)(this._azureProvider.internalValue),
      digital_ocean_provider: cdktf.listMapper(mk8SDigitalOceanProviderToTerraform, true)(this._digitalOceanProvider.internalValue),
      ephemeral_provider: cdktf.listMapper(mk8SEphemeralProviderToTerraform, true)(this._ephemeralProvider.internalValue),
      firewall: cdktf.listMapper(mk8SFirewallToTerraform, true)(this._firewall.internalValue),
      gcp_provider: cdktf.listMapper(mk8SGcpProviderToTerraform, true)(this._gcpProvider.internalValue),
      generic_provider: cdktf.listMapper(mk8SGenericProviderToTerraform, true)(this._genericProvider.internalValue),
      hetzner_provider: cdktf.listMapper(mk8SHetznerProviderToTerraform, true)(this._hetznerProvider.internalValue),
      lambdalabs_provider: cdktf.listMapper(mk8SLambdalabsProviderToTerraform, true)(this._lambdalabsProvider.internalValue),
      linode_provider: cdktf.listMapper(mk8SLinodeProviderToTerraform, true)(this._linodeProvider.internalValue),
      oblivus_provider: cdktf.listMapper(mk8SOblivusProviderToTerraform, true)(this._oblivusProvider.internalValue),
      paperspace_provider: cdktf.listMapper(mk8SPaperspaceProviderToTerraform, true)(this._paperspaceProvider.internalValue),
      triton_provider: cdktf.listMapper(mk8STritonProviderToTerraform, true)(this._tritonProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_ons: {
        value: cdktf.listMapperHcl(mk8SAddOnsToHclTerraform, true)(this._addOns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SAddOnsList",
      },
      aws_provider: {
        value: cdktf.listMapperHcl(mk8SAwsProviderToHclTerraform, true)(this._awsProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SAwsProviderList",
      },
      azure_provider: {
        value: cdktf.listMapperHcl(mk8SAzureProviderToHclTerraform, true)(this._azureProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SAzureProviderList",
      },
      digital_ocean_provider: {
        value: cdktf.listMapperHcl(mk8SDigitalOceanProviderToHclTerraform, true)(this._digitalOceanProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SDigitalOceanProviderList",
      },
      ephemeral_provider: {
        value: cdktf.listMapperHcl(mk8SEphemeralProviderToHclTerraform, true)(this._ephemeralProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SEphemeralProviderList",
      },
      firewall: {
        value: cdktf.listMapperHcl(mk8SFirewallToHclTerraform, true)(this._firewall.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Mk8SFirewallList",
      },
      gcp_provider: {
        value: cdktf.listMapperHcl(mk8SGcpProviderToHclTerraform, true)(this._gcpProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SGcpProviderList",
      },
      generic_provider: {
        value: cdktf.listMapperHcl(mk8SGenericProviderToHclTerraform, true)(this._genericProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SGenericProviderList",
      },
      hetzner_provider: {
        value: cdktf.listMapperHcl(mk8SHetznerProviderToHclTerraform, true)(this._hetznerProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SHetznerProviderList",
      },
      lambdalabs_provider: {
        value: cdktf.listMapperHcl(mk8SLambdalabsProviderToHclTerraform, true)(this._lambdalabsProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SLambdalabsProviderList",
      },
      linode_provider: {
        value: cdktf.listMapperHcl(mk8SLinodeProviderToHclTerraform, true)(this._linodeProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SLinodeProviderList",
      },
      oblivus_provider: {
        value: cdktf.listMapperHcl(mk8SOblivusProviderToHclTerraform, true)(this._oblivusProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SOblivusProviderList",
      },
      paperspace_provider: {
        value: cdktf.listMapperHcl(mk8SPaperspaceProviderToHclTerraform, true)(this._paperspaceProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8SPaperspaceProviderList",
      },
      triton_provider: {
        value: cdktf.listMapperHcl(mk8STritonProviderToHclTerraform, true)(this._tritonProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Mk8STritonProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
