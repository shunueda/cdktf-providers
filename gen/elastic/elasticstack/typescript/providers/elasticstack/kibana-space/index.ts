// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hexadecimal color code used in the space avatar. By default, the color is automatically generated from the space name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#color KibanaSpace#color}
  */
  readonly color?: string;
  /**
  * The description for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#description KibanaSpace#description}
  */
  readonly description?: string;
  /**
  * The list of disabled features for the space. To get a list of available feature IDs, use the Features API (https://www.elastic.co/guide/en/kibana/master/features-api-get.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#disabled_features KibanaSpace#disabled_features}
  */
  readonly disabledFeatures?: string[];
  /**
  * The data-URL encoded image to display in the space avatar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#image_url KibanaSpace#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The initials shown in the space avatar. By default, the initials are automatically generated from the space name. Initials must be 1 or 2 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#initials KibanaSpace#initials}
  */
  readonly initials?: string;
  /**
  * The display name for the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#name KibanaSpace#name}
  */
  readonly name: string;
  /**
  * The solution view for the space. Valid options are `security`, `oblt`, `es`, or `classic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#solution KibanaSpace#solution}
  */
  readonly solution?: string;
  /**
  * The space ID that is part of the Kibana URL when inside the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#space_id KibanaSpace#space_id}
  */
  readonly spaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space elasticstack_kibana_space}
*/
export class KibanaSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSpace to import
  * @param importFromId The id of the existing KibanaSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_space elasticstack_kibana_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_space',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._description = config.description;
    this._disabledFeatures = config.disabledFeatures;
    this._imageUrl = config.imageUrl;
    this._initials = config.initials;
    this._name = config.name;
    this._solution = config.solution;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // disabled_features - computed: true, optional: true, required: false
  private _disabledFeatures?: string[]; 
  public get disabledFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_features'));
  }
  public set disabledFeatures(value: string[]) {
    this._disabledFeatures = value;
  }
  public resetDisabledFeatures() {
    this._disabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledFeaturesInput() {
    return this._disabledFeatures;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // initials - computed: true, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
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

  // solution - computed: true, optional: true, required: false
  private _solution?: string; 
  public get solution() {
    return this.getStringAttribute('solution');
  }
  public set solution(value: string) {
    this._solution = value;
  }
  public resetSolution() {
    this._solution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionInput() {
    return this._solution;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      disabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledFeatures),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      initials: cdktf.stringToTerraform(this._initials),
      name: cdktf.stringToTerraform(this._name),
      solution: cdktf.stringToTerraform(this._solution),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
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
      disabled_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initials: {
        value: cdktf.stringToHclTerraform(this._initials),
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
      solution: {
        value: cdktf.stringToHclTerraform(this._solution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
