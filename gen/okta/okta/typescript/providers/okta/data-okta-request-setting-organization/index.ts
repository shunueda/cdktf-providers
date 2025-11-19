// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRequestSettingOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * request_experiences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_organization#request_experiences DataOktaRequestSettingOrganization#request_experiences}
  */
  readonly requestExperiences?: DataOktaRequestSettingOrganizationRequestExperiences[] | cdktf.IResolvable;
}
export interface DataOktaRequestSettingOrganizationRequestExperiences {
}

export function dataOktaRequestSettingOrganizationRequestExperiencesToTerraform(struct?: DataOktaRequestSettingOrganizationRequestExperiences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestSettingOrganizationRequestExperiencesToHclTerraform(struct?: DataOktaRequestSettingOrganizationRequestExperiences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestSettingOrganizationRequestExperiencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestSettingOrganizationRequestExperiences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestSettingOrganizationRequestExperiences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // experience_type - computed: true, optional: false, required: false
  public get experienceType() {
    return this.getStringAttribute('experience_type');
  }
}

export class DataOktaRequestSettingOrganizationRequestExperiencesList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestSettingOrganizationRequestExperiences[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestSettingOrganizationRequestExperiencesOutputReference {
    return new DataOktaRequestSettingOrganizationRequestExperiencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_organization okta_request_setting_organization}
*/
export class DataOktaRequestSettingOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_setting_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaRequestSettingOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaRequestSettingOrganization to import
  * @param importFromId The id of the existing DataOktaRequestSettingOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaRequestSettingOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_setting_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/request_setting_organization okta_request_setting_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRequestSettingOrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaRequestSettingOrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_request_setting_organization',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._requestExperiences.internalValue = config.requestExperiences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // long_time_past_provisioned - computed: true, optional: false, required: false
  public get longTimePastProvisioned() {
    return this.getBooleanAttribute('long_time_past_provisioned');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // subprocessors_acknowledged - computed: true, optional: false, required: false
  public get subprocessorsAcknowledged() {
    return this.getBooleanAttribute('subprocessors_acknowledged');
  }

  // request_experiences - computed: false, optional: true, required: false
  private _requestExperiences = new DataOktaRequestSettingOrganizationRequestExperiencesList(this, "request_experiences", false);
  public get requestExperiences() {
    return this._requestExperiences;
  }
  public putRequestExperiences(value: DataOktaRequestSettingOrganizationRequestExperiences[] | cdktf.IResolvable) {
    this._requestExperiences.internalValue = value;
  }
  public resetRequestExperiences() {
    this._requestExperiences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestExperiencesInput() {
    return this._requestExperiences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      request_experiences: cdktf.listMapper(dataOktaRequestSettingOrganizationRequestExperiencesToTerraform, true)(this._requestExperiences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      request_experiences: {
        value: cdktf.listMapperHcl(dataOktaRequestSettingOrganizationRequestExperiencesToHclTerraform, true)(this._requestExperiences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOktaRequestSettingOrganizationRequestExperiencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
