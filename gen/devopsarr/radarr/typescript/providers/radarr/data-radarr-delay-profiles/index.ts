// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/delay_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrDelayProfilesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRadarrDelayProfilesDelayProfiles {
}

export function dataRadarrDelayProfilesDelayProfilesToTerraform(struct?: DataRadarrDelayProfilesDelayProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrDelayProfilesDelayProfilesToHclTerraform(struct?: DataRadarrDelayProfilesDelayProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrDelayProfilesDelayProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRadarrDelayProfilesDelayProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrDelayProfilesDelayProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_if_highest_quality - computed: true, optional: false, required: false
  public get bypassIfHighestQuality() {
    return this.getBooleanAttribute('bypass_if_highest_quality');
  }

  // enable_torrent - computed: true, optional: false, required: false
  public get enableTorrent() {
    return this.getBooleanAttribute('enable_torrent');
  }

  // enable_usenet - computed: true, optional: false, required: false
  public get enableUsenet() {
    return this.getBooleanAttribute('enable_usenet');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // preferred_protocol - computed: true, optional: false, required: false
  public get preferredProtocol() {
    return this.getStringAttribute('preferred_protocol');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // torrent_delay - computed: true, optional: false, required: false
  public get torrentDelay() {
    return this.getNumberAttribute('torrent_delay');
  }

  // usenet_delay - computed: true, optional: false, required: false
  public get usenetDelay() {
    return this.getNumberAttribute('usenet_delay');
  }
}

export class DataRadarrDelayProfilesDelayProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataRadarrDelayProfilesDelayProfilesOutputReference {
    return new DataRadarrDelayProfilesDelayProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/delay_profiles radarr_delay_profiles}
*/
export class DataRadarrDelayProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_delay_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrDelayProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrDelayProfiles to import
  * @param importFromId The id of the existing DataRadarrDelayProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/delay_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrDelayProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_delay_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/delay_profiles radarr_delay_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrDelayProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrDelayProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_delay_profiles',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_profiles - computed: true, optional: false, required: false
  private _delayProfiles = new DataRadarrDelayProfilesDelayProfilesList(this, "delay_profiles", true);
  public get delayProfiles() {
    return this._delayProfiles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
