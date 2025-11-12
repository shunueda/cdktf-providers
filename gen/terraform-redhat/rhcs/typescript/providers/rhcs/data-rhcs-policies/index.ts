// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsPoliciesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRhcsPoliciesAccountRolePolicies {
}

export function dataRhcsPoliciesAccountRolePoliciesToTerraform(struct?: DataRhcsPoliciesAccountRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsPoliciesAccountRolePoliciesToHclTerraform(struct?: DataRhcsPoliciesAccountRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsPoliciesAccountRolePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsPoliciesAccountRolePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsPoliciesAccountRolePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sts_installer_permission_policy - computed: true, optional: false, required: false
  public get stsInstallerPermissionPolicy() {
    return this.getStringAttribute('sts_installer_permission_policy');
  }

  // sts_instance_controlplane_permission_policy - computed: true, optional: false, required: false
  public get stsInstanceControlplanePermissionPolicy() {
    return this.getStringAttribute('sts_instance_controlplane_permission_policy');
  }

  // sts_instance_worker_permission_policy - computed: true, optional: false, required: false
  public get stsInstanceWorkerPermissionPolicy() {
    return this.getStringAttribute('sts_instance_worker_permission_policy');
  }

  // sts_support_permission_policy - computed: true, optional: false, required: false
  public get stsSupportPermissionPolicy() {
    return this.getStringAttribute('sts_support_permission_policy');
  }

  // sts_support_rh_sre_role - computed: true, optional: false, required: false
  public get stsSupportRhSreRole() {
    return this.getStringAttribute('sts_support_rh_sre_role');
  }
}
export interface DataRhcsPoliciesOperatorRolePolicies {
}

export function dataRhcsPoliciesOperatorRolePoliciesToTerraform(struct?: DataRhcsPoliciesOperatorRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsPoliciesOperatorRolePoliciesToHclTerraform(struct?: DataRhcsPoliciesOperatorRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsPoliciesOperatorRolePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsPoliciesOperatorRolePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsPoliciesOperatorRolePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // openshift_aws_vpce_operator_avo_aws_creds_policy - computed: true, optional: false, required: false
  public get openshiftAwsVpceOperatorAvoAwsCredsPolicy() {
    return this.getStringAttribute('openshift_aws_vpce_operator_avo_aws_creds_policy');
  }

  // openshift_cloud_credential_operator_cloud_credential_operator_iam_ro_creds_policy - computed: true, optional: false, required: false
  public get openshiftCloudCredentialOperatorCloudCredentialOperatorIamRoCredsPolicy() {
    return this.getStringAttribute('openshift_cloud_credential_operator_cloud_credential_operator_iam_ro_creds_policy');
  }

  // openshift_cloud_network_config_controller_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftCloudNetworkConfigControllerCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_cloud_network_config_controller_cloud_credentials_policy');
  }

  // openshift_cluster_csi_drivers_ebs_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftClusterCsiDriversEbsCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_cluster_csi_drivers_ebs_cloud_credentials_policy');
  }

  // openshift_image_registry_installer_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftImageRegistryInstallerCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_image_registry_installer_cloud_credentials_policy');
  }

  // openshift_ingress_operator_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftIngressOperatorCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_ingress_operator_cloud_credentials_policy');
  }

  // openshift_machine_api_aws_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftMachineApiAwsCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_machine_api_aws_cloud_credentials_policy');
  }

  // shared_vpc_openshift_ingress_operator_cloud_credentials_policy - computed: true, optional: false, required: false
  public get sharedVpcOpenshiftIngressOperatorCloudCredentialsPolicy() {
    return this.getStringAttribute('shared_vpc_openshift_ingress_operator_cloud_credentials_policy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/policies rhcs_policies}
*/
export class DataRhcsPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsPolicies to import
  * @param importFromId The id of the existing DataRhcsPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/policies rhcs_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRhcsPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rhcs_policies',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
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

  // account_role_policies - computed: true, optional: false, required: false
  private _accountRolePolicies = new DataRhcsPoliciesAccountRolePoliciesOutputReference(this, "account_role_policies");
  public get accountRolePolicies() {
    return this._accountRolePolicies;
  }

  // operator_role_policies - computed: true, optional: false, required: false
  private _operatorRolePolicies = new DataRhcsPoliciesOperatorRolePoliciesOutputReference(this, "operator_role_policies");
  public get operatorRolePolicies() {
    return this._operatorRolePolicies;
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
