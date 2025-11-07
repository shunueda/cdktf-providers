// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackageRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of supported architectures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#arches PackageRepository#arches}
  */
  readonly arches?: string[];
  /**
  * The list of components to enable. Only applicable to custom repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#components PackageRepository#components}
  */
  readonly components?: string[];
  /**
  * Disable deb-src lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#disable_sources PackageRepository#disable_sources}
  */
  readonly disableSources?: boolean | cdktf.IResolvable;
  /**
  * The list of components to disable. Only applicable to the default Ubuntu repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#disabled_components PackageRepository#disabled_components}
  */
  readonly disabledComponents?: string[];
  /**
  * The list of pockets to disable. This only applies to Ubuntu repositories; custom or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#disabled_pockets PackageRepository#disabled_pockets}
  */
  readonly disabledPockets?: string[];
  /**
  * Which package distributions to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#distributions PackageRepository#distributions}
  */
  readonly distributions?: string[];
  /**
  * Whether or not the repository is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#enabled PackageRepository#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#id PackageRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The authentication key to use with the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#key PackageRepository#key}
  */
  readonly key?: string;
  /**
  * The name of the package repository.
  * *Note*: the Name field for the Ubuntu Archive and Ubuntu Ports repos are `main_archive` and `ports_archive` respectively. As they are default resources, the MAAS UI shows a different name to their internal database name entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#name PackageRepository#name}
  */
  readonly name: string;
  /**
  * The URL of the package repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#url PackageRepository#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository maas_package_repository}
*/
export class PackageRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_package_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackageRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackageRepository to import
  * @param importFromId The id of the existing PackageRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackageRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_package_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/package_repository maas_package_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackageRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: PackageRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_package_repository',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arches = config.arches;
    this._components = config.components;
    this._disableSources = config.disableSources;
    this._disabledComponents = config.disabledComponents;
    this._disabledPockets = config.disabledPockets;
    this._distributions = config.distributions;
    this._enabled = config.enabled;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arches - computed: false, optional: true, required: false
  private _arches?: string[]; 
  public get arches() {
    return cdktf.Fn.tolist(this.getListAttribute('arches'));
  }
  public set arches(value: string[]) {
    this._arches = value;
  }
  public resetArches() {
    this._arches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archesInput() {
    return this._arches;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // disable_sources - computed: false, optional: true, required: false
  private _disableSources?: boolean | cdktf.IResolvable; 
  public get disableSources() {
    return this.getBooleanAttribute('disable_sources');
  }
  public set disableSources(value: boolean | cdktf.IResolvable) {
    this._disableSources = value;
  }
  public resetDisableSources() {
    this._disableSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSourcesInput() {
    return this._disableSources;
  }

  // disabled_components - computed: false, optional: true, required: false
  private _disabledComponents?: string[]; 
  public get disabledComponents() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_components'));
  }
  public set disabledComponents(value: string[]) {
    this._disabledComponents = value;
  }
  public resetDisabledComponents() {
    this._disabledComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledComponentsInput() {
    return this._disabledComponents;
  }

  // disabled_pockets - computed: false, optional: true, required: false
  private _disabledPockets?: string[]; 
  public get disabledPockets() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_pockets'));
  }
  public set disabledPockets(value: string[]) {
    this._disabledPockets = value;
  }
  public resetDisabledPockets() {
    this._disabledPockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledPocketsInput() {
    return this._disabledPockets;
  }

  // distributions - computed: false, optional: true, required: false
  private _distributions?: string[]; 
  public get distributions() {
    return cdktf.Fn.tolist(this.getListAttribute('distributions'));
  }
  public set distributions(value: string[]) {
    this._distributions = value;
  }
  public resetDistributions() {
    this._distributions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionsInput() {
    return this._distributions;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arches),
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      disable_sources: cdktf.booleanToTerraform(this._disableSources),
      disabled_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledComponents),
      disabled_pockets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledPockets),
      distributions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._distributions),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_sources: {
        value: cdktf.booleanToHclTerraform(this._disableSources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledComponents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disabled_pockets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledPockets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      distributions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._distributions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
