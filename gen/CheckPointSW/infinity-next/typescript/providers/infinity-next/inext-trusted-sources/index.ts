// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextTrustedSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum number of users or addresses that must exhibit similar activity for the behavior to be considered benign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources#min_num_of_sources InextTrustedSources#min_num_of_sources}
  */
  readonly minNumOfSources: number;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources#name InextTrustedSources#name}
  */
  readonly name: string;
  /**
  * The trusted sources identifier values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources#sources_identifiers InextTrustedSources#sources_identifiers}
  */
  readonly sourcesIdentifiers?: string[];
  /**
  * The visibility of the resource - Shared or Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources#visibility InextTrustedSources#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources inext_trusted_sources}
*/
export class InextTrustedSources extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_trusted_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextTrustedSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextTrustedSources to import
  * @param importFromId The id of the existing InextTrustedSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextTrustedSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_trusted_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_trusted_sources inext_trusted_sources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextTrustedSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: InextTrustedSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_trusted_sources',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._minNumOfSources = config.minNumOfSources;
    this._name = config.name;
    this._sourcesIdentifiers = config.sourcesIdentifiers;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_num_of_sources - computed: false, optional: false, required: true
  private _minNumOfSources?: number; 
  public get minNumOfSources() {
    return this.getNumberAttribute('min_num_of_sources');
  }
  public set minNumOfSources(value: number) {
    this._minNumOfSources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumOfSourcesInput() {
    return this._minNumOfSources;
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

  // sources_identifiers - computed: false, optional: true, required: false
  private _sourcesIdentifiers?: string[]; 
  public get sourcesIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('sources_identifiers'));
  }
  public set sourcesIdentifiers(value: string[]) {
    this._sourcesIdentifiers = value;
  }
  public resetSourcesIdentifiers() {
    this._sourcesIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesIdentifiersInput() {
    return this._sourcesIdentifiers;
  }

  // sources_identifiers_ids - computed: true, optional: false, required: false
  public get sourcesIdentifiersIds() {
    return cdktf.Fn.tolist(this.getListAttribute('sources_identifiers_ids'));
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      min_num_of_sources: cdktf.numberToTerraform(this._minNumOfSources),
      name: cdktf.stringToTerraform(this._name),
      sources_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourcesIdentifiers),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      min_num_of_sources: {
        value: cdktf.numberToHclTerraform(this._minNumOfSources),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources_identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourcesIdentifiers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
