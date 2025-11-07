// https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/data-sources/applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortitokencloudApplicationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataFortitokencloudApplicationsApps {
}

export function dataFortitokencloudApplicationsAppsToTerraform(struct?: DataFortitokencloudApplicationsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortitokencloudApplicationsAppsToHclTerraform(struct?: DataFortitokencloudApplicationsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortitokencloudApplicationsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortitokencloudApplicationsApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortitokencloudApplicationsApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branding_id - computed: true, optional: false, required: false
  public get brandingId() {
    return this.getStringAttribute('branding_id');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // realm_id - computed: true, optional: false, required: false
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }

  // signing_cert_id - computed: true, optional: false, required: false
  public get signingCertId() {
    return this.getStringAttribute('signing_cert_id');
  }

  // slo_url - computed: true, optional: false, required: false
  public get sloUrl() {
    return this.getStringAttribute('slo_url');
  }

  // sp_acs_url - computed: true, optional: false, required: false
  public get spAcsUrl() {
    return this.getStringAttribute('sp_acs_url');
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sp_slo_url - computed: true, optional: false, required: false
  public get spSloUrl() {
    return this.getStringAttribute('sp_slo_url');
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataFortitokencloudApplicationsAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortitokencloudApplicationsAppsOutputReference {
    return new DataFortitokencloudApplicationsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/data-sources/applications fortitokencloud_applications}
*/
export class DataFortitokencloudApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortitokencloud_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortitokencloudApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortitokencloudApplications to import
  * @param importFromId The id of the existing DataFortitokencloudApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/data-sources/applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortitokencloudApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortitokencloud_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/data-sources/applications fortitokencloud_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortitokencloudApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortitokencloudApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortitokencloud_applications',
      terraformGeneratorMetadata: {
        providerName: 'fortitokencloud',
        providerVersion: '1.0.0'
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

  // apps - computed: true, optional: false, required: false
  private _apps = new DataFortitokencloudApplicationsAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
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
