// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdwanTrafficDistributionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#device SdwanTrafficDistributionProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#folder SdwanTrafficDistributionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Link-Tags for interfaces identified by defined tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#link_tags SdwanTrafficDistributionProfile#link_tags}
  */
  readonly linkTags?: SdwanTrafficDistributionProfileLinkTags[] | cdktf.IResolvable;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#name SdwanTrafficDistributionProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#snippet SdwanTrafficDistributionProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Traffic distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#traffic_distribution SdwanTrafficDistributionProfile#traffic_distribution}
  */
  readonly trafficDistribution?: string;
}
export interface SdwanTrafficDistributionProfileLinkTags {
  /**
  * Link-Tag used for identifying a set of interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#name SdwanTrafficDistributionProfile#name}
  */
  readonly name: string;
  /**
  * Weight (percentage) (only used when `traffic-distribution` is `Weighted Session Distribution`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#weight SdwanTrafficDistributionProfile#weight}
  */
  readonly weight?: number;
}

export function sdwanTrafficDistributionProfileLinkTagsToTerraform(struct?: SdwanTrafficDistributionProfileLinkTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function sdwanTrafficDistributionProfileLinkTagsToHclTerraform(struct?: SdwanTrafficDistributionProfileLinkTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanTrafficDistributionProfileLinkTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdwanTrafficDistributionProfileLinkTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanTrafficDistributionProfileLinkTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
    }
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SdwanTrafficDistributionProfileLinkTagsList extends cdktf.ComplexList {
  public internalValue? : SdwanTrafficDistributionProfileLinkTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SdwanTrafficDistributionProfileLinkTagsOutputReference {
    return new SdwanTrafficDistributionProfileLinkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile scm_sdwan_traffic_distribution_profile}
*/
export class SdwanTrafficDistributionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_sdwan_traffic_distribution_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdwanTrafficDistributionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdwanTrafficDistributionProfile to import
  * @param importFromId The id of the existing SdwanTrafficDistributionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdwanTrafficDistributionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_sdwan_traffic_distribution_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_traffic_distribution_profile scm_sdwan_traffic_distribution_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdwanTrafficDistributionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SdwanTrafficDistributionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_sdwan_traffic_distribution_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._linkTags.internalValue = config.linkTags;
    this._name = config.name;
    this._snippet = config.snippet;
    this._trafficDistribution = config.trafficDistribution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_tags - computed: false, optional: true, required: false
  private _linkTags = new SdwanTrafficDistributionProfileLinkTagsList(this, "link_tags", false);
  public get linkTags() {
    return this._linkTags;
  }
  public putLinkTags(value: SdwanTrafficDistributionProfileLinkTags[] | cdktf.IResolvable) {
    this._linkTags.internalValue = value;
  }
  public resetLinkTags() {
    this._linkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTagsInput() {
    return this._linkTags.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // traffic_distribution - computed: true, optional: true, required: false
  private _trafficDistribution?: string; 
  public get trafficDistribution() {
    return this.getStringAttribute('traffic_distribution');
  }
  public set trafficDistribution(value: string) {
    this._trafficDistribution = value;
  }
  public resetTrafficDistribution() {
    this._trafficDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionInput() {
    return this._trafficDistribution;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      link_tags: cdktf.listMapper(sdwanTrafficDistributionProfileLinkTagsToTerraform, false)(this._linkTags.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      traffic_distribution: cdktf.stringToTerraform(this._trafficDistribution),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_tags: {
        value: cdktf.listMapperHcl(sdwanTrafficDistributionProfileLinkTagsToHclTerraform, false)(this._linkTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdwanTrafficDistributionProfileLinkTagsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_distribution: {
        value: cdktf.stringToHclTerraform(this._trafficDistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
