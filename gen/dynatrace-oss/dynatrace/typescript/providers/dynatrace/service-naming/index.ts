// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceNamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#enabled ServiceNaming#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name to be assigned to matching entities. You can use the following placeholders here:  * `{AwsAutoScalingGroup:Name}`  * `{AwsAvailabilityZone:Name}`  * `{AwsElasticLoadBalancer:Name}`  * `{AwsRelationalDatabaseService:DBName}`  * `{AwsRelationalDatabaseService:Endpoint}`  * `{AwsRelationalDatabaseService:Engine}`  * `{AwsRelationalDatabaseService:InstanceClass}`  * `{AwsRelationalDatabaseService:Name}`  * `{AwsRelationalDatabaseService:Port}`  * `{AzureRegion:Name}`  * `{AzureScaleSet:Name}`  * `{AzureVm:Name}`  * `{CloudFoundryOrganization:Name}`  * `{CustomDevice:DetectedName}`  * `{CustomDevice:DnsName}`  * `{CustomDevice:IpAddress}`  * `{CustomDevice:Port}`  * `{DockerContainerGroupInstance:ContainerName}`  * `{DockerContainerGroupInstance:FullImageName}`  * `{DockerContainerGroupInstance:ImageVersion}`  * `{DockerContainerGroupInstance:StrippedImageName}`  * `{ESXIHost:HardwareModel}`  * `{ESXIHost:HardwareVendor}`  * `{ESXIHost:Name}`  * `{ESXIHost:ProductName}`  * `{ESXIHost:ProductVersion}`  * `{Ec2Instance:AmiId}`  * `{Ec2Instance:BeanstalkEnvironmentName}`  * `{Ec2Instance:InstanceId}`  * `{Ec2Instance:InstanceType}`  * `{Ec2Instance:LocalHostName}`  * `{Ec2Instance:Name}`  * `{Ec2Instance:PublicHostName}`  * `{Ec2Instance:SecurityGroup}`  * `{GoogleComputeInstance:Id}`  * `{GoogleComputeInstance:IpAddresses}`  * `{GoogleComputeInstance:MachineType}`  * `{GoogleComputeInstance:Name}`  * `{GoogleComputeInstance:ProjectId}`  * `{GoogleComputeInstance:Project}`  * `{Host:AWSNameTag}`  * `{Host:AixLogicalCpuCount}`  * `{Host:AzureHostName}`  * `{Host:AzureSiteName}`  * `{Host:BoshDeploymentId}`  * `{Host:BoshInstanceId}`  * `{Host:BoshInstanceName}`  * `{Host:BoshName}`  * `{Host:BoshStemcellVersion}`  * `{Host:CpuCores}`  * `{Host:DetectedName}`  * `{Host:Environment:AppName}`  * `{Host:Environment:BoshReleaseVersion}`  * `{Host:Environment:Environment}`  * `{Host:Environment:Link}`  * `{Host:Environment:Organization}`  * `{Host:Environment:Owner}`  * `{Host:Environment:Support}`  * `{Host:IpAddress}`  * `{Host:LogicalCpuCores}`  * `{Host:OneAgentCustomHostName}`  * `{Host:OperatingSystemVersion}`  * `{Host:PaasMemoryLimit}`  * `{HostGroup:Name}`  * `{KubernetesCluster:Name}`  * `{KubernetesNode:DetectedName}`  * `{OpenstackAvailabilityZone:Name}`  * `{OpenstackZone:Name}`  * `{OpenstackComputeNode:Name}`  * `{OpenstackProject:Name}`  * `{OpenstackVm:InstanceType}`  * `{OpenstackVm:Name}`  * `{OpenstackVm:SecurityGroup}`  * `{ProcessGroup:AmazonECRImageAccountId}`  * `{ProcessGroup:AmazonECRImageRegion}`  * `{ProcessGroup:AmazonECSCluster}`  * `{ProcessGroup:AmazonECSContainerName}`  * `{ProcessGroup:AmazonECSFamily}`  * `{ProcessGroup:AmazonECSRevision}`  * `{ProcessGroup:AmazonLambdaFunctionName}`  * `{ProcessGroup:AmazonRegion}`  * `{ProcessGroup:ApacheConfigPath}`  * `{ProcessGroup:ApacheSparkMasterIpAddress}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AzureHostName}`  * `{ProcessGroup:AzureSiteName}`  * `{ProcessGroup:CassandraClusterName}`  * `{ProcessGroup:CatalinaBase}`  * `{ProcessGroup:CatalinaHome}`  * `{ProcessGroup:CloudFoundryAppId}`  * `{ProcessGroup:CloudFoundryAppName}`  * `{ProcessGroup:CloudFoundryInstanceIndex}`  * `{ProcessGroup:CloudFoundrySpaceId}`  * `{ProcessGroup:CloudFoundrySpaceName}`  * `{ProcessGroup:ColdFusionJvmConfigFile}`  * `{ProcessGroup:ColdFusionServiceName}`  * `{ProcessGroup:CommandLineArgs}`  * `{ProcessGroup:DetectedName}`  * `{ProcessGroup:DotNetCommandPath}`  * `{ProcessGroup:DotNetCommand}`  * `{ProcessGroup:DotNetClusterId}`  * `{ProcessGroup:DotNetNodeId}`  * `{ProcessGroup:ElasticsearchClusterName}`  * `{ProcessGroup:ElasticsearchNodeName}`  * `{ProcessGroup:EquinoxConfigPath}`  * `{ProcessGroup:ExeName}`  * `{ProcessGroup:ExePath}`  * `{ProcessGroup:GlassFishDomainName}`  * `{ProcessGroup:GlassFishInstanceName}`  * `{ProcessGroup:GoogleAppEngineInstance}`  * `{ProcessGroup:GoogleAppEngineService}`  * `{ProcessGroup:GoogleCloudProject}`  * `{ProcessGroup:HybrisBinDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisDataDirectory}`  * `{ProcessGroup:IBMCicsRegion}`  * `{ProcessGroup:IBMCtgName}`  * `{ProcessGroup:IBMImsConnectRegion}`  * `{ProcessGroup:IBMImsControlRegion}`  * `{ProcessGroup:IBMImsMessageProcessingRegion}`  * `{ProcessGroup:IBMImsSoapGwName}`  * `{ProcessGroup:IBMIntegrationNodeName}`  * `{ProcessGroup:IBMIntegrationServerName}`  * `{ProcessGroup:IISAppPool}`  * `{ProcessGroup:IISRoleName}`  * `{ProcessGroup:JbossHome}`  * `{ProcessGroup:JbossMode}`  * `{ProcessGroup:JbossServerName}`  * `{ProcessGroup:JavaJarFile}`  * `{ProcessGroup:JavaJarPath}`  * `{ProcessGroup:JavaMainCLass}`  * `{ProcessGroup:KubernetesBasePodName}`  * `{ProcessGroup:KubernetesContainerName}`  * `{ProcessGroup:KubernetesFullPodName}`  * `{ProcessGroup:KubernetesNamespace}`  * `{ProcessGroup:KubernetesPodUid}`  * `{ProcessGroup:MssqlInstanceName}`  * `{ProcessGroup:NodeJsAppBaseDirectory}`  * `{ProcessGroup:NodeJsAppName}`  * `{ProcessGroup:NodeJsScriptName}`  * `{ProcessGroup:OracleSid}`  * `{ProcessGroup:PHPScriptPath}`  * `{ProcessGroup:PHPWorkingDirectory}`  * `{ProcessGroup:Ports}`  * `{ProcessGroup:RubyAppRootPath}`  * `{ProcessGroup:RubyScriptPath}`  * `{ProcessGroup:SoftwareAGInstallRoot}`  * `{ProcessGroup:SoftwareAGProductPropertyName}`  * `{ProcessGroup:SpringBootAppName}`  * `{ProcessGroup:SpringBootProfileName}`  * `{ProcessGroup:SpringBootStartupClass}`  * `{ProcessGroup:TIBCOBusinessWorksAppNodeName}`  * `{ProcessGroup:TIBCOBusinessWorksAppSpaceName}`  * `{ProcessGroup:TIBCOBusinessWorksCeAppName}`  * `{ProcessGroup:TIBCOBusinessWorksCeVersion}`  * `{ProcessGroup:TIBCOBusinessWorksDomainName}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFilePath}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFile}`  * `{ProcessGroup:TIBCOBusinessWorksHome}`  * `{ProcessGroup:VarnishInstanceName}`  * `{ProcessGroup:WebLogicClusterName}`  * `{ProcessGroup:WebLogicDomainName}`  * `{ProcessGroup:WebLogicHome}`  * `{ProcessGroup:WebLogicName}`  * `{ProcessGroup:WebSphereCellName}`  * `{ProcessGroup:WebSphereClusterName}`  * `{ProcessGroup:WebSphereNodeName}`  * `{ProcessGroup:WebSphereServerName}`  * `{ProcessGroup:ActorSystem}`  * `{Service:STGServerName}`  * `{Service:DatabaseHostName}`  * `{Service:DatabaseName}`  * `{Service:DatabaseVendor}`  * `{Service:DetectedName}`  * `{Service:EndpointPath}`  * `{Service:EndpointPathGatewayUrl}`  * `{Service:IIBApplicationName}`  * `{Service:MessageListenerClassName}`  * `{Service:Port}`  * `{Service:PublicDomainName}`  * `{Service:RemoteEndpoint}`  * `{Service:RemoteName}`  * `{Service:WebApplicationId}`  * `{Service:WebContextRoot}`  * `{Service:WebServerName}`  * `{Service:WebServiceNamespace}`  * `{Service:WebServiceName}`  * `{VmwareDatacenter:Name}`  * `{VmwareVm:Name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#format ServiceNaming#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#id ServiceNaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#name ServiceNaming#name}
  */
  readonly name: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#conditions ServiceNaming#conditions}
  */
  readonly conditions?: ServiceNamingConditions[] | cdktf.IResolvable;
}
export interface ServiceNamingConditionsConditionApplicationType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionApplicationTypeToTerraform(struct?: ServiceNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionApplicationTypeToHclTerraform(struct?: ServiceNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionApplicationTypeOutputReference {
    return new ServiceNamingConditionsConditionApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionApplicationTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionApplicationTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionApplicationTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionAzureComputeMode {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionAzureComputeModeToTerraform(struct?: ServiceNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionAzureComputeModeToHclTerraform(struct?: ServiceNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionAzureComputeModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionAzureComputeModeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionAzureComputeModeOutputReference {
    return new ServiceNamingConditionsConditionAzureComputeModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionAzureComputeModeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionAzureComputeModeComparisonToTerraform(struct?: ServiceNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionAzureComputeModeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionAzureComputeModeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionAzureComputeModeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionAzureComputeModeComparisonOutputReference {
    return new ServiceNamingConditionsConditionAzureComputeModeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionAzureSku {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionAzureSkuToTerraform(struct?: ServiceNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionAzureSkuToHclTerraform(struct?: ServiceNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionAzureSkuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionAzureSkuList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionAzureSku[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionAzureSkuOutputReference {
    return new ServiceNamingConditionsConditionAzureSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionAzureSkuComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be AZURE_SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionAzureSkuComparisionToTerraform(struct?: ServiceNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionAzureSkuComparisionToHclTerraform(struct?: ServiceNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionAzureSkuComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionAzureSkuComparisionList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionAzureSkuComparisionOutputReference {
    return new ServiceNamingConditionsConditionAzureSkuComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionBaseComparisonBasic {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionBaseComparisonBasicToTerraform(struct?: ServiceNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionBaseComparisonBasicToHclTerraform(struct?: ServiceNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionBaseComparisonBasicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionBaseComparisonBasicList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionBaseComparisonBasicOutputReference {
    return new ServiceNamingConditionsConditionBaseComparisonBasicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionBaseConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionBaseConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionBaseConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionBaseConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionBaseConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionBaseConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionBaseConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionBitness {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionBitnessToTerraform(struct?: ServiceNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionBitnessToHclTerraform(struct?: ServiceNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionBitnessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionBitness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionBitness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionBitnessList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionBitness[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionBitnessOutputReference {
    return new ServiceNamingConditionsConditionBitnessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionBitnessComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be BITNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionBitnessComparisionToTerraform(struct?: ServiceNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionBitnessComparisionToHclTerraform(struct?: ServiceNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionBitnessComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionBitnessComparisionList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionBitnessComparisionOutputReference {
    return new ServiceNamingConditionsConditionBitnessComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCloudType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionCloudTypeToTerraform(struct?: ServiceNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionCloudTypeToHclTerraform(struct?: ServiceNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCloudTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCloudType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCloudType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionCloudTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCloudType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCloudTypeOutputReference {
    return new ServiceNamingConditionsConditionCloudTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCloudTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CLOUD_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionCloudTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionCloudTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCloudTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionCloudTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCloudTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionCloudTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionComparisonToTerraform(struct?: ServiceNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionComparisonOutputReference {
    return new ServiceNamingConditionsConditionComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomApplicationType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionCustomApplicationTypeToTerraform(struct?: ServiceNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionCustomApplicationTypeToHclTerraform(struct?: ServiceNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionCustomApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomApplicationTypeOutputReference {
    return new ServiceNamingConditionsConditionCustomApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CUSTOM_APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionCustomApplicationTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionCustomApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomApplicationTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionCustomApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomHostMetadataDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#source ServiceNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionCustomHostMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomHostMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceNamingConditionsConditionCustomHostMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: ServiceNamingConditionsConditionCustomHostMetadataDynamicKey;
}

export function serviceNamingConditionsConditionCustomHostMetadataToTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: serviceNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function serviceNamingConditionsConditionCustomHostMetadataToHclTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: serviceNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomHostMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomHostMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ServiceNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ServiceNamingConditionsConditionCustomHostMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ServiceNamingConditionsConditionCustomHostMetadataList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomHostMetadataOutputReference {
    return new ServiceNamingConditionsConditionCustomHostMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#source ServiceNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceNamingConditionsConditionCustomHostMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be HOST_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey;
}

export function serviceNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: serviceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function serviceNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: serviceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ServiceNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ServiceNamingConditionsConditionCustomHostMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#source ServiceNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceNamingConditionsConditionCustomProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey;
}

export function serviceNamingConditionsConditionCustomProcessMetadataToTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: serviceNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function serviceNamingConditionsConditionCustomProcessMetadataToHclTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: serviceNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomProcessMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ServiceNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ServiceNamingConditionsConditionCustomProcessMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ServiceNamingConditionsConditionCustomProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomProcessMetadataOutputReference {
    return new ServiceNamingConditionsConditionCustomProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#source ServiceNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ServiceNamingConditionsConditionCustomProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be PROCESS_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey;
}

export function serviceNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: serviceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function serviceNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: serviceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionDatabaseTopology {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionDatabaseTopologyToTerraform(struct?: ServiceNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionDatabaseTopologyToHclTerraform(struct?: ServiceNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionDatabaseTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionDatabaseTopologyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionDatabaseTopologyOutputReference {
    return new ServiceNamingConditionsConditionDatabaseTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionDatabaseTopologyComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DATABASE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionDatabaseTopologyComparisonToTerraform(struct?: ServiceNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionDatabaseTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionDatabaseTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionDatabaseTopologyComparisonOutputReference {
    return new ServiceNamingConditionsConditionDatabaseTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionDcrumDecoder {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionDcrumDecoderToTerraform(struct?: ServiceNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionDcrumDecoderToHclTerraform(struct?: ServiceNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionDcrumDecoderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionDcrumDecoderList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionDcrumDecoderOutputReference {
    return new ServiceNamingConditionsConditionDcrumDecoderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionDcrumDecoderComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DCRUM_DECODER_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionDcrumDecoderComparisonToTerraform(struct?: ServiceNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionDcrumDecoderComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionDcrumDecoderComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionDcrumDecoderComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionDcrumDecoderComparisonOutputReference {
    return new ServiceNamingConditionsConditionDcrumDecoderComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionEntity {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionEntityToTerraform(struct?: ServiceNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionEntityToHclTerraform(struct?: ServiceNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionEntityList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionEntity[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionEntityOutputReference {
    return new ServiceNamingConditionsConditionEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionEntityIdComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be ENTITY_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionEntityIdComparisonToTerraform(struct?: ServiceNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionEntityIdComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionEntityIdComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionEntityIdComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionEntityIdComparisonOutputReference {
    return new ServiceNamingConditionsConditionEntityIdComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionHostTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#verbatim_type ServiceNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function serviceNamingConditionsConditionHostTechValueToTerraform(struct?: ServiceNamingConditionsConditionHostTechValueOutputReference | ServiceNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function serviceNamingConditionsConditionHostTechValueToHclTerraform(struct?: ServiceNamingConditionsConditionHostTechValueOutputReference | ServiceNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionHostTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionHostTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionHostTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ServiceNamingConditionsConditionHostTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionHostTechValue;
}

export function serviceNamingConditionsConditionHostTechToTerraform(struct?: ServiceNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionHostTechValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionHostTechToHclTerraform(struct?: ServiceNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionHostTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionHostTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionHostTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionHostTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionHostTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionHostTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionHostTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionHostTechList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionHostTech[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionHostTechOutputReference {
    return new ServiceNamingConditionsConditionHostTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionHypervisor {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionHypervisorToTerraform(struct?: ServiceNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionHypervisorToHclTerraform(struct?: ServiceNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionHypervisorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionHypervisorList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionHypervisor[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionHypervisorOutputReference {
    return new ServiceNamingConditionsConditionHypervisorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionHypervisorTypeComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be HYPERVISOR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionHypervisorTypeComparisionToTerraform(struct?: ServiceNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionHypervisorTypeComparisionToHclTerraform(struct?: ServiceNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionHypervisorTypeComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionHypervisorTypeComparisionList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionHypervisorTypeComparisionOutputReference {
    return new ServiceNamingConditionsConditionHypervisorTypeComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedName {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedNameToTerraform(struct?: ServiceNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedNameToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIndexedNameList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedName[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedNameOutputReference {
    return new ServiceNamingConditionsConditionIndexedNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedNameComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedNameComparisonToTerraform(struct?: ServiceNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedNameComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedNameComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIndexedNameComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedNameComparisonOutputReference {
    return new ServiceNamingConditionsConditionIndexedNameComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedString {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedStringToTerraform(struct?: ServiceNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedStringToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIndexedStringList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedString[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedStringOutputReference {
    return new ServiceNamingConditionsConditionIndexedStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedStringComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedStringComparisonToTerraform(struct?: ServiceNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedStringComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIndexedStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedStringComparisonOutputReference {
    return new ServiceNamingConditionsConditionIndexedStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#context ServiceNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedTagValueToTerraform(struct?: ServiceNamingConditionsConditionIndexedTagValueOutputReference | ServiceNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedTagValueToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedTagValueOutputReference | ServiceNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionIndexedTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ServiceNamingConditionsConditionIndexedTag {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionIndexedTagValue;
}

export function serviceNamingConditionsConditionIndexedTagToTerraform(struct?: ServiceNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionIndexedTagValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedTagToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionIndexedTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionIndexedTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionIndexedTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionIndexedTagList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedTag[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedTagOutputReference {
    return new ServiceNamingConditionsConditionIndexedTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIndexedTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#context ServiceNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct?: ServiceNamingConditionsConditionIndexedTagComparisonValueOutputReference | ServiceNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedTagComparisonValueOutputReference | ServiceNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionIndexedTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ServiceNamingConditionsConditionIndexedTagComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionIndexedTagComparisonValue;
}

export function serviceNamingConditionsConditionIndexedTagComparisonToTerraform(struct?: ServiceNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIndexedTagComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIndexedTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionIndexedTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionIndexedTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionIndexedTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIndexedTagComparisonOutputReference {
    return new ServiceNamingConditionsConditionIndexedTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionInteger {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: number;
}

export function serviceNamingConditionsConditionIntegerToTerraform(struct?: ServiceNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIntegerToHclTerraform(struct?: ServiceNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIntegerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionInteger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionInteger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIntegerList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionInteger[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIntegerOutputReference {
    return new ServiceNamingConditionsConditionIntegerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIntegerComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INTEGER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: number;
}

export function serviceNamingConditionsConditionIntegerComparisonToTerraform(struct?: ServiceNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIntegerComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIntegerComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIntegerComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIntegerComparisonOutputReference {
    return new ServiceNamingConditionsConditionIntegerComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIpaddress {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#case_sensitive ServiceNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIpaddressToTerraform(struct?: ServiceNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIpaddressToHclTerraform(struct?: ServiceNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIpaddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIpaddressList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIpaddress[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIpaddressOutputReference {
    return new ServiceNamingConditionsConditionIpaddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionIpaddressComparison {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#case_sensitive ServiceNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be IP_ADDRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionIpaddressComparisonToTerraform(struct?: ServiceNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionIpaddressComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionIpaddressComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionIpaddressComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionIpaddressComparisonOutputReference {
    return new ServiceNamingConditionsConditionIpaddressComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionMobilePlatform {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionMobilePlatformToTerraform(struct?: ServiceNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionMobilePlatformToHclTerraform(struct?: ServiceNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionMobilePlatformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionMobilePlatformList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionMobilePlatformOutputReference {
    return new ServiceNamingConditionsConditionMobilePlatformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionMobilePlatformComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be MOBILE_PLATFORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionMobilePlatformComparisonToTerraform(struct?: ServiceNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionMobilePlatformComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionMobilePlatformComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionMobilePlatformComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionMobilePlatformComparisonOutputReference {
    return new ServiceNamingConditionsConditionMobilePlatformComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionOsArch {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionOsArchToTerraform(struct?: ServiceNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionOsArchToHclTerraform(struct?: ServiceNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionOsArchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionOsArch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionOsArch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionOsArchList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionOsArch[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionOsArchOutputReference {
    return new ServiceNamingConditionsConditionOsArchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionOsType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionOsTypeToTerraform(struct?: ServiceNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionOsTypeToHclTerraform(struct?: ServiceNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionOsTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionOsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionOsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionOsTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionOsType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionOsTypeOutputReference {
    return new ServiceNamingConditionsConditionOsTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionOsarchitectureComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_ARCHITECTURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionOsarchitectureComparisonToTerraform(struct?: ServiceNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionOsarchitectureComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionOsarchitectureComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionOsarchitectureComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionOsarchitectureComparisonOutputReference {
    return new ServiceNamingConditionsConditionOsarchitectureComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionOstypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionOstypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionOstypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionOstypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionOstypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionOstypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionOstypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionPaasType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionPaasTypeToTerraform(struct?: ServiceNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionPaasTypeToHclTerraform(struct?: ServiceNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionPaasTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionPaasType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionPaasType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionPaasTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionPaasType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionPaasTypeOutputReference {
    return new ServiceNamingConditionsConditionPaasTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionPaasTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be PAAS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionPaasTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionPaasTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionPaasTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionPaasTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionPaasTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionPaasTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionProcessMetadataToTerraform(struct?: ServiceNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionProcessMetadataToHclTerraform(struct?: ServiceNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionProcessMetadataOutputReference {
    return new ServiceNamingConditionsConditionProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be PROCESS_PREDEFINED_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionProcessMetadataConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionProcessMetadataConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionServiceTopology {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionServiceTopologyToTerraform(struct?: ServiceNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionServiceTopologyToHclTerraform(struct?: ServiceNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionServiceTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionServiceTopologyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionServiceTopology[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionServiceTopologyOutputReference {
    return new ServiceNamingConditionsConditionServiceTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionServiceTopologyComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionServiceTopologyComparisonToTerraform(struct?: ServiceNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionServiceTopologyComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionServiceTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionServiceTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionServiceTopologyComparisonOutputReference {
    return new ServiceNamingConditionsConditionServiceTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionServiceType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionServiceTypeToTerraform(struct?: ServiceNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionServiceTypeToHclTerraform(struct?: ServiceNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionServiceTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionServiceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionServiceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionServiceTypeList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionServiceType[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionServiceTypeOutputReference {
    return new ServiceNamingConditionsConditionServiceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionServiceTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionServiceTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionServiceTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionServiceTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionServiceTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionServiceTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionServiceTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionSimpleHostTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#verbatim_type ServiceNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function serviceNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct?: ServiceNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | ServiceNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function serviceNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct?: ServiceNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | ServiceNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSimpleHostTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionSimpleHostTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSimpleHostTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ServiceNamingConditionsConditionSimpleHostTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_HOST_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionSimpleHostTechComparisonValue;
}

export function serviceNamingConditionsConditionSimpleHostTechComparisonToTerraform(struct?: ServiceNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionSimpleHostTechComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSimpleHostTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSimpleHostTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionSimpleHostTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionSimpleHostTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionSimpleHostTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionSimpleHostTechComparisonOutputReference {
    return new ServiceNamingConditionsConditionSimpleHostTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionSimpleTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#verbatim_type ServiceNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function serviceNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct?: ServiceNamingConditionsConditionSimpleTechComparisonValueOutputReference | ServiceNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function serviceNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct?: ServiceNamingConditionsConditionSimpleTechComparisonValueOutputReference | ServiceNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSimpleTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionSimpleTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSimpleTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ServiceNamingConditionsConditionSimpleTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionSimpleTechComparisonValue;
}

export function serviceNamingConditionsConditionSimpleTechComparisonToTerraform(struct?: ServiceNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionSimpleTechComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSimpleTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSimpleTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionSimpleTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionSimpleTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionSimpleTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionSimpleTechComparisonOutputReference {
    return new ServiceNamingConditionsConditionSimpleTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionString {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#case_sensitive ServiceNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionStringToTerraform(struct?: ServiceNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionStringToHclTerraform(struct?: ServiceNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionStringList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionString[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionStringOutputReference {
    return new ServiceNamingConditionsConditionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionStringComparison {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#case_sensitive ServiceNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionStringComparisonToTerraform(struct?: ServiceNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionStringComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionStringComparisonOutputReference {
    return new ServiceNamingConditionsConditionStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionStringConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionStringConditionKeyToTerraform(struct?: ServiceNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionStringConditionKeyToHclTerraform(struct?: ServiceNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionStringConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionStringConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionStringConditionKeyOutputReference {
    return new ServiceNamingConditionsConditionStringConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionStringKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#attribute ServiceNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dynamic_key ServiceNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function serviceNamingConditionsConditionStringKeyToTerraform(struct?: ServiceNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function serviceNamingConditionsConditionStringKeyToHclTerraform(struct?: ServiceNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionStringKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionStringKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionStringKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ServiceNamingConditionsConditionStringKeyList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionStringKey[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionStringKeyOutputReference {
    return new ServiceNamingConditionsConditionStringKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionSyntheticEngine {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionSyntheticEngineToTerraform(struct?: ServiceNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionSyntheticEngineToHclTerraform(struct?: ServiceNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSyntheticEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionSyntheticEngineList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionSyntheticEngineOutputReference {
    return new ServiceNamingConditionsConditionSyntheticEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionSyntheticEngineTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SYNTHETIC_ENGINE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform(struct?: ServiceNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceNamingConditionsConditionSyntheticEngineTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference {
    return new ServiceNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#context ServiceNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionTagValueToTerraform(struct?: ServiceNamingConditionsConditionTagValueOutputReference | ServiceNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionTagValueToHclTerraform(struct?: ServiceNamingConditionsConditionTagValueOutputReference | ServiceNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ServiceNamingConditionsConditionTag {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionTagValue;
}

export function serviceNamingConditionsConditionTagToTerraform(struct?: ServiceNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionTagValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionTagToHclTerraform(struct?: ServiceNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionTagList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionTag[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionTagOutputReference {
    return new ServiceNamingConditionsConditionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#context ServiceNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: string;
}

export function serviceNamingConditionsConditionTagComparisonValueToTerraform(struct?: ServiceNamingConditionsConditionTagComparisonValueOutputReference | ServiceNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionTagComparisonValueToHclTerraform(struct?: ServiceNamingConditionsConditionTagComparisonValueOutputReference | ServiceNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ServiceNamingConditionsConditionTagComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionTagComparisonValue;
}

export function serviceNamingConditionsConditionTagComparisonToTerraform(struct?: ServiceNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionTagComparisonValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionTagComparisonToHclTerraform(struct?: ServiceNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionTagComparisonOutputReference {
    return new ServiceNamingConditionsConditionTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsConditionTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#type ServiceNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#verbatim_type ServiceNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function serviceNamingConditionsConditionTechValueToTerraform(struct?: ServiceNamingConditionsConditionTechValueOutputReference | ServiceNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function serviceNamingConditionsConditionTechValueToHclTerraform(struct?: ServiceNamingConditionsConditionTechValueOutputReference | ServiceNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceNamingConditionsConditionTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ServiceNamingConditionsConditionTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#negate ServiceNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#operator ServiceNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#value ServiceNaming#value}
  */
  readonly value?: ServiceNamingConditionsConditionTechValue;
}

export function serviceNamingConditionsConditionTechToTerraform(struct?: ServiceNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: serviceNamingConditionsConditionTechValueToTerraform(struct!.value),
  }
}


export function serviceNamingConditionsConditionTechToHclTerraform(struct?: ServiceNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: serviceNamingConditionsConditionTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsConditionTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsConditionTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ServiceNamingConditionsConditionTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ServiceNamingConditionsConditionTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ServiceNamingConditionsConditionTechList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsConditionTech[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionTechOutputReference {
    return new ServiceNamingConditionsConditionTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditionsCondition {
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#unknowns ServiceNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#application_type ServiceNaming#application_type}
  */
  readonly applicationType?: ServiceNamingConditionsConditionApplicationType[] | cdktf.IResolvable;
  /**
  * application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#application_type_comparison ServiceNaming#application_type_comparison}
  */
  readonly applicationTypeComparison?: ServiceNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * azure_compute_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#azure_compute_mode ServiceNaming#azure_compute_mode}
  */
  readonly azureComputeMode?: ServiceNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable;
  /**
  * azure_compute_mode_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#azure_compute_mode_comparison ServiceNaming#azure_compute_mode_comparison}
  */
  readonly azureComputeModeComparison?: ServiceNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable;
  /**
  * azure_sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#azure_sku ServiceNaming#azure_sku}
  */
  readonly azureSku?: ServiceNamingConditionsConditionAzureSku[] | cdktf.IResolvable;
  /**
  * azure_sku_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#azure_sku_comparision ServiceNaming#azure_sku_comparision}
  */
  readonly azureSkuComparision?: ServiceNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable;
  /**
  * base_comparison_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#base_comparison_basic ServiceNaming#base_comparison_basic}
  */
  readonly baseComparisonBasic?: ServiceNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable;
  /**
  * base_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#base_condition_key ServiceNaming#base_condition_key}
  */
  readonly baseConditionKey?: ServiceNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable;
  /**
  * bitness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#bitness ServiceNaming#bitness}
  */
  readonly bitness?: ServiceNamingConditionsConditionBitness[] | cdktf.IResolvable;
  /**
  * bitness_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#bitness_comparision ServiceNaming#bitness_comparision}
  */
  readonly bitnessComparision?: ServiceNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable;
  /**
  * cloud_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#cloud_type ServiceNaming#cloud_type}
  */
  readonly cloudType?: ServiceNamingConditionsConditionCloudType[] | cdktf.IResolvable;
  /**
  * cloud_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#cloud_type_comparison ServiceNaming#cloud_type_comparison}
  */
  readonly cloudTypeComparison?: ServiceNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#comparison ServiceNaming#comparison}
  */
  readonly comparison?: ServiceNamingConditionsConditionComparison[] | cdktf.IResolvable;
  /**
  * custom_application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_application_type ServiceNaming#custom_application_type}
  */
  readonly customApplicationType?: ServiceNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable;
  /**
  * custom_application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_application_type_comparison ServiceNaming#custom_application_type_comparison}
  */
  readonly customApplicationTypeComparison?: ServiceNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * custom_host_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_host_metadata ServiceNaming#custom_host_metadata}
  */
  readonly customHostMetadata?: ServiceNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable;
  /**
  * custom_host_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_host_metadata_condition_key ServiceNaming#custom_host_metadata_condition_key}
  */
  readonly customHostMetadataConditionKey?: ServiceNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * custom_process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_process_metadata ServiceNaming#custom_process_metadata}
  */
  readonly customProcessMetadata?: ServiceNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable;
  /**
  * custom_process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#custom_process_metadata_condition_key ServiceNaming#custom_process_metadata_condition_key}
  */
  readonly customProcessMetadataConditionKey?: ServiceNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * database_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#database_topology ServiceNaming#database_topology}
  */
  readonly databaseTopology?: ServiceNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable;
  /**
  * database_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#database_topology_comparison ServiceNaming#database_topology_comparison}
  */
  readonly databaseTopologyComparison?: ServiceNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable;
  /**
  * dcrum_decoder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dcrum_decoder ServiceNaming#dcrum_decoder}
  */
  readonly dcrumDecoder?: ServiceNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable;
  /**
  * dcrum_decoder_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#dcrum_decoder_comparison ServiceNaming#dcrum_decoder_comparison}
  */
  readonly dcrumDecoderComparison?: ServiceNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#entity ServiceNaming#entity}
  */
  readonly entity?: ServiceNamingConditionsConditionEntity[] | cdktf.IResolvable;
  /**
  * entity_id_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#entity_id_comparison ServiceNaming#entity_id_comparison}
  */
  readonly entityIdComparison?: ServiceNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable;
  /**
  * host_tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#host_tech ServiceNaming#host_tech}
  */
  readonly hostTech?: ServiceNamingConditionsConditionHostTech[] | cdktf.IResolvable;
  /**
  * hypervisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#hypervisor ServiceNaming#hypervisor}
  */
  readonly hypervisor?: ServiceNamingConditionsConditionHypervisor[] | cdktf.IResolvable;
  /**
  * hypervisor_type_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#hypervisor_type_comparision ServiceNaming#hypervisor_type_comparision}
  */
  readonly hypervisorTypeComparision?: ServiceNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable;
  /**
  * indexed_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_name ServiceNaming#indexed_name}
  */
  readonly indexedName?: ServiceNamingConditionsConditionIndexedName[] | cdktf.IResolvable;
  /**
  * indexed_name_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_name_comparison ServiceNaming#indexed_name_comparison}
  */
  readonly indexedNameComparison?: ServiceNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable;
  /**
  * indexed_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_string ServiceNaming#indexed_string}
  */
  readonly indexedString?: ServiceNamingConditionsConditionIndexedString[] | cdktf.IResolvable;
  /**
  * indexed_string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_string_comparison ServiceNaming#indexed_string_comparison}
  */
  readonly indexedStringComparison?: ServiceNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable;
  /**
  * indexed_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_tag ServiceNaming#indexed_tag}
  */
  readonly indexedTag?: ServiceNamingConditionsConditionIndexedTag[] | cdktf.IResolvable;
  /**
  * indexed_tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#indexed_tag_comparison ServiceNaming#indexed_tag_comparison}
  */
  readonly indexedTagComparison?: ServiceNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable;
  /**
  * integer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#integer ServiceNaming#integer}
  */
  readonly integer?: ServiceNamingConditionsConditionInteger[] | cdktf.IResolvable;
  /**
  * integer_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#integer_comparison ServiceNaming#integer_comparison}
  */
  readonly integerComparison?: ServiceNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable;
  /**
  * ipaddress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#ipaddress ServiceNaming#ipaddress}
  */
  readonly ipaddress?: ServiceNamingConditionsConditionIpaddress[] | cdktf.IResolvable;
  /**
  * ipaddress_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#ipaddress_comparison ServiceNaming#ipaddress_comparison}
  */
  readonly ipaddressComparison?: ServiceNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#key ServiceNaming#key}
  */
  readonly key?: ServiceNamingConditionsConditionKey[] | cdktf.IResolvable;
  /**
  * mobile_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#mobile_platform ServiceNaming#mobile_platform}
  */
  readonly mobilePlatform?: ServiceNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable;
  /**
  * mobile_platform_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#mobile_platform_comparison ServiceNaming#mobile_platform_comparison}
  */
  readonly mobilePlatformComparison?: ServiceNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable;
  /**
  * os_arch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#os_arch ServiceNaming#os_arch}
  */
  readonly osArch?: ServiceNamingConditionsConditionOsArch[] | cdktf.IResolvable;
  /**
  * os_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#os_type ServiceNaming#os_type}
  */
  readonly osType?: ServiceNamingConditionsConditionOsType[] | cdktf.IResolvable;
  /**
  * osarchitecture_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#osarchitecture_comparison ServiceNaming#osarchitecture_comparison}
  */
  readonly osarchitectureComparison?: ServiceNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable;
  /**
  * ostype_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#ostype_comparison ServiceNaming#ostype_comparison}
  */
  readonly ostypeComparison?: ServiceNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable;
  /**
  * paas_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#paas_type ServiceNaming#paas_type}
  */
  readonly paasType?: ServiceNamingConditionsConditionPaasType[] | cdktf.IResolvable;
  /**
  * paas_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#paas_type_comparison ServiceNaming#paas_type_comparison}
  */
  readonly paasTypeComparison?: ServiceNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable;
  /**
  * process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#process_metadata ServiceNaming#process_metadata}
  */
  readonly processMetadata?: ServiceNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable;
  /**
  * process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#process_metadata_condition_key ServiceNaming#process_metadata_condition_key}
  */
  readonly processMetadataConditionKey?: ServiceNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * service_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#service_topology ServiceNaming#service_topology}
  */
  readonly serviceTopology?: ServiceNamingConditionsConditionServiceTopology[] | cdktf.IResolvable;
  /**
  * service_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#service_topology_comparison ServiceNaming#service_topology_comparison}
  */
  readonly serviceTopologyComparison?: ServiceNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#service_type ServiceNaming#service_type}
  */
  readonly serviceType?: ServiceNamingConditionsConditionServiceType[] | cdktf.IResolvable;
  /**
  * service_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#service_type_comparison ServiceNaming#service_type_comparison}
  */
  readonly serviceTypeComparison?: ServiceNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable;
  /**
  * simple_host_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#simple_host_tech_comparison ServiceNaming#simple_host_tech_comparison}
  */
  readonly simpleHostTechComparison?: ServiceNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable;
  /**
  * simple_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#simple_tech_comparison ServiceNaming#simple_tech_comparison}
  */
  readonly simpleTechComparison?: ServiceNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#string ServiceNaming#string}
  */
  readonly string?: ServiceNamingConditionsConditionString[] | cdktf.IResolvable;
  /**
  * string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#string_comparison ServiceNaming#string_comparison}
  */
  readonly stringComparison?: ServiceNamingConditionsConditionStringComparison[] | cdktf.IResolvable;
  /**
  * string_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#string_condition_key ServiceNaming#string_condition_key}
  */
  readonly stringConditionKey?: ServiceNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable;
  /**
  * string_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#string_key ServiceNaming#string_key}
  */
  readonly stringKey?: ServiceNamingConditionsConditionStringKey[] | cdktf.IResolvable;
  /**
  * synthetic_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#synthetic_engine ServiceNaming#synthetic_engine}
  */
  readonly syntheticEngine?: ServiceNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable;
  /**
  * synthetic_engine_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#synthetic_engine_type_comparison ServiceNaming#synthetic_engine_type_comparison}
  */
  readonly syntheticEngineTypeComparison?: ServiceNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#tag ServiceNaming#tag}
  */
  readonly tag?: ServiceNamingConditionsConditionTag[] | cdktf.IResolvable;
  /**
  * tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#tag_comparison ServiceNaming#tag_comparison}
  */
  readonly tagComparison?: ServiceNamingConditionsConditionTagComparison[] | cdktf.IResolvable;
  /**
  * tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#tech ServiceNaming#tech}
  */
  readonly tech?: ServiceNamingConditionsConditionTech[] | cdktf.IResolvable;
}

export function serviceNamingConditionsConditionToTerraform(struct?: ServiceNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    application_type: cdktf.listMapper(serviceNamingConditionsConditionApplicationTypeToTerraform, true)(struct!.applicationType),
    application_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionApplicationTypeComparisonToTerraform, true)(struct!.applicationTypeComparison),
    azure_compute_mode: cdktf.listMapper(serviceNamingConditionsConditionAzureComputeModeToTerraform, true)(struct!.azureComputeMode),
    azure_compute_mode_comparison: cdktf.listMapper(serviceNamingConditionsConditionAzureComputeModeComparisonToTerraform, true)(struct!.azureComputeModeComparison),
    azure_sku: cdktf.listMapper(serviceNamingConditionsConditionAzureSkuToTerraform, true)(struct!.azureSku),
    azure_sku_comparision: cdktf.listMapper(serviceNamingConditionsConditionAzureSkuComparisionToTerraform, true)(struct!.azureSkuComparision),
    base_comparison_basic: cdktf.listMapper(serviceNamingConditionsConditionBaseComparisonBasicToTerraform, true)(struct!.baseComparisonBasic),
    base_condition_key: cdktf.listMapper(serviceNamingConditionsConditionBaseConditionKeyToTerraform, true)(struct!.baseConditionKey),
    bitness: cdktf.listMapper(serviceNamingConditionsConditionBitnessToTerraform, true)(struct!.bitness),
    bitness_comparision: cdktf.listMapper(serviceNamingConditionsConditionBitnessComparisionToTerraform, true)(struct!.bitnessComparision),
    cloud_type: cdktf.listMapper(serviceNamingConditionsConditionCloudTypeToTerraform, true)(struct!.cloudType),
    cloud_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionCloudTypeComparisonToTerraform, true)(struct!.cloudTypeComparison),
    comparison: cdktf.listMapper(serviceNamingConditionsConditionComparisonToTerraform, true)(struct!.comparison),
    custom_application_type: cdktf.listMapper(serviceNamingConditionsConditionCustomApplicationTypeToTerraform, true)(struct!.customApplicationType),
    custom_application_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionCustomApplicationTypeComparisonToTerraform, true)(struct!.customApplicationTypeComparison),
    custom_host_metadata: cdktf.listMapper(serviceNamingConditionsConditionCustomHostMetadataToTerraform, true)(struct!.customHostMetadata),
    custom_host_metadata_condition_key: cdktf.listMapper(serviceNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform, true)(struct!.customHostMetadataConditionKey),
    custom_process_metadata: cdktf.listMapper(serviceNamingConditionsConditionCustomProcessMetadataToTerraform, true)(struct!.customProcessMetadata),
    custom_process_metadata_condition_key: cdktf.listMapper(serviceNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform, true)(struct!.customProcessMetadataConditionKey),
    database_topology: cdktf.listMapper(serviceNamingConditionsConditionDatabaseTopologyToTerraform, true)(struct!.databaseTopology),
    database_topology_comparison: cdktf.listMapper(serviceNamingConditionsConditionDatabaseTopologyComparisonToTerraform, true)(struct!.databaseTopologyComparison),
    dcrum_decoder: cdktf.listMapper(serviceNamingConditionsConditionDcrumDecoderToTerraform, true)(struct!.dcrumDecoder),
    dcrum_decoder_comparison: cdktf.listMapper(serviceNamingConditionsConditionDcrumDecoderComparisonToTerraform, true)(struct!.dcrumDecoderComparison),
    entity: cdktf.listMapper(serviceNamingConditionsConditionEntityToTerraform, true)(struct!.entity),
    entity_id_comparison: cdktf.listMapper(serviceNamingConditionsConditionEntityIdComparisonToTerraform, true)(struct!.entityIdComparison),
    host_tech: cdktf.listMapper(serviceNamingConditionsConditionHostTechToTerraform, true)(struct!.hostTech),
    hypervisor: cdktf.listMapper(serviceNamingConditionsConditionHypervisorToTerraform, true)(struct!.hypervisor),
    hypervisor_type_comparision: cdktf.listMapper(serviceNamingConditionsConditionHypervisorTypeComparisionToTerraform, true)(struct!.hypervisorTypeComparision),
    indexed_name: cdktf.listMapper(serviceNamingConditionsConditionIndexedNameToTerraform, true)(struct!.indexedName),
    indexed_name_comparison: cdktf.listMapper(serviceNamingConditionsConditionIndexedNameComparisonToTerraform, true)(struct!.indexedNameComparison),
    indexed_string: cdktf.listMapper(serviceNamingConditionsConditionIndexedStringToTerraform, true)(struct!.indexedString),
    indexed_string_comparison: cdktf.listMapper(serviceNamingConditionsConditionIndexedStringComparisonToTerraform, true)(struct!.indexedStringComparison),
    indexed_tag: cdktf.listMapper(serviceNamingConditionsConditionIndexedTagToTerraform, true)(struct!.indexedTag),
    indexed_tag_comparison: cdktf.listMapper(serviceNamingConditionsConditionIndexedTagComparisonToTerraform, true)(struct!.indexedTagComparison),
    integer: cdktf.listMapper(serviceNamingConditionsConditionIntegerToTerraform, true)(struct!.integer),
    integer_comparison: cdktf.listMapper(serviceNamingConditionsConditionIntegerComparisonToTerraform, true)(struct!.integerComparison),
    ipaddress: cdktf.listMapper(serviceNamingConditionsConditionIpaddressToTerraform, true)(struct!.ipaddress),
    ipaddress_comparison: cdktf.listMapper(serviceNamingConditionsConditionIpaddressComparisonToTerraform, true)(struct!.ipaddressComparison),
    key: cdktf.listMapper(serviceNamingConditionsConditionKeyToTerraform, true)(struct!.key),
    mobile_platform: cdktf.listMapper(serviceNamingConditionsConditionMobilePlatformToTerraform, true)(struct!.mobilePlatform),
    mobile_platform_comparison: cdktf.listMapper(serviceNamingConditionsConditionMobilePlatformComparisonToTerraform, true)(struct!.mobilePlatformComparison),
    os_arch: cdktf.listMapper(serviceNamingConditionsConditionOsArchToTerraform, true)(struct!.osArch),
    os_type: cdktf.listMapper(serviceNamingConditionsConditionOsTypeToTerraform, true)(struct!.osType),
    osarchitecture_comparison: cdktf.listMapper(serviceNamingConditionsConditionOsarchitectureComparisonToTerraform, true)(struct!.osarchitectureComparison),
    ostype_comparison: cdktf.listMapper(serviceNamingConditionsConditionOstypeComparisonToTerraform, true)(struct!.ostypeComparison),
    paas_type: cdktf.listMapper(serviceNamingConditionsConditionPaasTypeToTerraform, true)(struct!.paasType),
    paas_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionPaasTypeComparisonToTerraform, true)(struct!.paasTypeComparison),
    process_metadata: cdktf.listMapper(serviceNamingConditionsConditionProcessMetadataToTerraform, true)(struct!.processMetadata),
    process_metadata_condition_key: cdktf.listMapper(serviceNamingConditionsConditionProcessMetadataConditionKeyToTerraform, true)(struct!.processMetadataConditionKey),
    service_topology: cdktf.listMapper(serviceNamingConditionsConditionServiceTopologyToTerraform, true)(struct!.serviceTopology),
    service_topology_comparison: cdktf.listMapper(serviceNamingConditionsConditionServiceTopologyComparisonToTerraform, true)(struct!.serviceTopologyComparison),
    service_type: cdktf.listMapper(serviceNamingConditionsConditionServiceTypeToTerraform, true)(struct!.serviceType),
    service_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionServiceTypeComparisonToTerraform, true)(struct!.serviceTypeComparison),
    simple_host_tech_comparison: cdktf.listMapper(serviceNamingConditionsConditionSimpleHostTechComparisonToTerraform, true)(struct!.simpleHostTechComparison),
    simple_tech_comparison: cdktf.listMapper(serviceNamingConditionsConditionSimpleTechComparisonToTerraform, true)(struct!.simpleTechComparison),
    string: cdktf.listMapper(serviceNamingConditionsConditionStringToTerraform, true)(struct!.string),
    string_comparison: cdktf.listMapper(serviceNamingConditionsConditionStringComparisonToTerraform, true)(struct!.stringComparison),
    string_condition_key: cdktf.listMapper(serviceNamingConditionsConditionStringConditionKeyToTerraform, true)(struct!.stringConditionKey),
    string_key: cdktf.listMapper(serviceNamingConditionsConditionStringKeyToTerraform, true)(struct!.stringKey),
    synthetic_engine: cdktf.listMapper(serviceNamingConditionsConditionSyntheticEngineToTerraform, true)(struct!.syntheticEngine),
    synthetic_engine_type_comparison: cdktf.listMapper(serviceNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform, true)(struct!.syntheticEngineTypeComparison),
    tag: cdktf.listMapper(serviceNamingConditionsConditionTagToTerraform, true)(struct!.tag),
    tag_comparison: cdktf.listMapper(serviceNamingConditionsConditionTagComparisonToTerraform, true)(struct!.tagComparison),
    tech: cdktf.listMapper(serviceNamingConditionsConditionTechToTerraform, true)(struct!.tech),
  }
}


export function serviceNamingConditionsConditionToHclTerraform(struct?: ServiceNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionApplicationTypeToHclTerraform, true)(struct!.applicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionApplicationTypeList",
    },
    application_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionApplicationTypeComparisonToHclTerraform, true)(struct!.applicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionApplicationTypeComparisonList",
    },
    azure_compute_mode: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionAzureComputeModeToHclTerraform, true)(struct!.azureComputeMode),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionAzureComputeModeList",
    },
    azure_compute_mode_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionAzureComputeModeComparisonToHclTerraform, true)(struct!.azureComputeModeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionAzureComputeModeComparisonList",
    },
    azure_sku: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionAzureSkuToHclTerraform, true)(struct!.azureSku),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionAzureSkuList",
    },
    azure_sku_comparision: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionAzureSkuComparisionToHclTerraform, true)(struct!.azureSkuComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionAzureSkuComparisionList",
    },
    base_comparison_basic: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionBaseComparisonBasicToHclTerraform, true)(struct!.baseComparisonBasic),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionBaseComparisonBasicList",
    },
    base_condition_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionBaseConditionKeyToHclTerraform, true)(struct!.baseConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionBaseConditionKeyList",
    },
    bitness: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionBitnessToHclTerraform, true)(struct!.bitness),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionBitnessList",
    },
    bitness_comparision: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionBitnessComparisionToHclTerraform, true)(struct!.bitnessComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionBitnessComparisionList",
    },
    cloud_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCloudTypeToHclTerraform, true)(struct!.cloudType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCloudTypeList",
    },
    cloud_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCloudTypeComparisonToHclTerraform, true)(struct!.cloudTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCloudTypeComparisonList",
    },
    comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionComparisonToHclTerraform, true)(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionComparisonList",
    },
    custom_application_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomApplicationTypeToHclTerraform, true)(struct!.customApplicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomApplicationTypeList",
    },
    custom_application_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform, true)(struct!.customApplicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomApplicationTypeComparisonList",
    },
    custom_host_metadata: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomHostMetadataToHclTerraform, true)(struct!.customHostMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomHostMetadataList",
    },
    custom_host_metadata_condition_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform, true)(struct!.customHostMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomHostMetadataConditionKeyList",
    },
    custom_process_metadata: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomProcessMetadataToHclTerraform, true)(struct!.customProcessMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomProcessMetadataList",
    },
    custom_process_metadata_condition_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform, true)(struct!.customProcessMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyList",
    },
    database_topology: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionDatabaseTopologyToHclTerraform, true)(struct!.databaseTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionDatabaseTopologyList",
    },
    database_topology_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform, true)(struct!.databaseTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionDatabaseTopologyComparisonList",
    },
    dcrum_decoder: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionDcrumDecoderToHclTerraform, true)(struct!.dcrumDecoder),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionDcrumDecoderList",
    },
    dcrum_decoder_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionDcrumDecoderComparisonToHclTerraform, true)(struct!.dcrumDecoderComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionDcrumDecoderComparisonList",
    },
    entity: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionEntityList",
    },
    entity_id_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionEntityIdComparisonToHclTerraform, true)(struct!.entityIdComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionEntityIdComparisonList",
    },
    host_tech: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionHostTechToHclTerraform, true)(struct!.hostTech),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionHostTechList",
    },
    hypervisor: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionHypervisorToHclTerraform, true)(struct!.hypervisor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionHypervisorList",
    },
    hypervisor_type_comparision: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionHypervisorTypeComparisionToHclTerraform, true)(struct!.hypervisorTypeComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionHypervisorTypeComparisionList",
    },
    indexed_name: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedNameToHclTerraform, true)(struct!.indexedName),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedNameList",
    },
    indexed_name_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedNameComparisonToHclTerraform, true)(struct!.indexedNameComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedNameComparisonList",
    },
    indexed_string: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedStringToHclTerraform, true)(struct!.indexedString),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedStringList",
    },
    indexed_string_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedStringComparisonToHclTerraform, true)(struct!.indexedStringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedStringComparisonList",
    },
    indexed_tag: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedTagToHclTerraform, true)(struct!.indexedTag),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedTagList",
    },
    indexed_tag_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIndexedTagComparisonToHclTerraform, true)(struct!.indexedTagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIndexedTagComparisonList",
    },
    integer: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIntegerToHclTerraform, true)(struct!.integer),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIntegerList",
    },
    integer_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIntegerComparisonToHclTerraform, true)(struct!.integerComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIntegerComparisonList",
    },
    ipaddress: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIpaddressToHclTerraform, true)(struct!.ipaddress),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIpaddressList",
    },
    ipaddress_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionIpaddressComparisonToHclTerraform, true)(struct!.ipaddressComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionIpaddressComparisonList",
    },
    key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionKeyList",
    },
    mobile_platform: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionMobilePlatformToHclTerraform, true)(struct!.mobilePlatform),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionMobilePlatformList",
    },
    mobile_platform_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionMobilePlatformComparisonToHclTerraform, true)(struct!.mobilePlatformComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionMobilePlatformComparisonList",
    },
    os_arch: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionOsArchToHclTerraform, true)(struct!.osArch),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionOsArchList",
    },
    os_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionOsTypeToHclTerraform, true)(struct!.osType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionOsTypeList",
    },
    osarchitecture_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionOsarchitectureComparisonToHclTerraform, true)(struct!.osarchitectureComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionOsarchitectureComparisonList",
    },
    ostype_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionOstypeComparisonToHclTerraform, true)(struct!.ostypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionOstypeComparisonList",
    },
    paas_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionPaasTypeToHclTerraform, true)(struct!.paasType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionPaasTypeList",
    },
    paas_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionPaasTypeComparisonToHclTerraform, true)(struct!.paasTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionPaasTypeComparisonList",
    },
    process_metadata: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionProcessMetadataToHclTerraform, true)(struct!.processMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionProcessMetadataList",
    },
    process_metadata_condition_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform, true)(struct!.processMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionProcessMetadataConditionKeyList",
    },
    service_topology: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionServiceTopologyToHclTerraform, true)(struct!.serviceTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionServiceTopologyList",
    },
    service_topology_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionServiceTopologyComparisonToHclTerraform, true)(struct!.serviceTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionServiceTopologyComparisonList",
    },
    service_type: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionServiceTypeToHclTerraform, true)(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionServiceTypeList",
    },
    service_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionServiceTypeComparisonToHclTerraform, true)(struct!.serviceTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionServiceTypeComparisonList",
    },
    simple_host_tech_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionSimpleHostTechComparisonToHclTerraform, true)(struct!.simpleHostTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSimpleHostTechComparisonList",
    },
    simple_tech_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionSimpleTechComparisonToHclTerraform, true)(struct!.simpleTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSimpleTechComparisonList",
    },
    string: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionStringToHclTerraform, true)(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionStringList",
    },
    string_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionStringComparisonToHclTerraform, true)(struct!.stringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionStringComparisonList",
    },
    string_condition_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionStringConditionKeyToHclTerraform, true)(struct!.stringConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionStringConditionKeyList",
    },
    string_key: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionStringKeyToHclTerraform, true)(struct!.stringKey),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionStringKeyList",
    },
    synthetic_engine: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionSyntheticEngineToHclTerraform, true)(struct!.syntheticEngine),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSyntheticEngineList",
    },
    synthetic_engine_type_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform, true)(struct!.syntheticEngineTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionSyntheticEngineTypeComparisonList",
    },
    tag: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTagList",
    },
    tag_comparison: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionTagComparisonToHclTerraform, true)(struct!.tagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTagComparisonList",
    },
    tech: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionTechToHclTerraform, true)(struct!.tech),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionTechList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._applicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType?.internalValue;
    }
    if (this._applicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTypeComparison = this._applicationTypeComparison?.internalValue;
    }
    if (this._azureComputeMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeMode = this._azureComputeMode?.internalValue;
    }
    if (this._azureComputeModeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeModeComparison = this._azureComputeModeComparison?.internalValue;
    }
    if (this._azureSku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSku = this._azureSku?.internalValue;
    }
    if (this._azureSkuComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSkuComparision = this._azureSkuComparision?.internalValue;
    }
    if (this._baseComparisonBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseComparisonBasic = this._baseComparisonBasic?.internalValue;
    }
    if (this._baseConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseConditionKey = this._baseConditionKey?.internalValue;
    }
    if (this._bitness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitness = this._bitness?.internalValue;
    }
    if (this._bitnessComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitnessComparision = this._bitnessComparision?.internalValue;
    }
    if (this._cloudType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType?.internalValue;
    }
    if (this._cloudTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudTypeComparison = this._cloudTypeComparison?.internalValue;
    }
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    if (this._customApplicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationType = this._customApplicationType?.internalValue;
    }
    if (this._customApplicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationTypeComparison = this._customApplicationTypeComparison?.internalValue;
    }
    if (this._customHostMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadata = this._customHostMetadata?.internalValue;
    }
    if (this._customHostMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadataConditionKey = this._customHostMetadataConditionKey?.internalValue;
    }
    if (this._customProcessMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadata = this._customProcessMetadata?.internalValue;
    }
    if (this._customProcessMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadataConditionKey = this._customProcessMetadataConditionKey?.internalValue;
    }
    if (this._databaseTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopology = this._databaseTopology?.internalValue;
    }
    if (this._databaseTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopologyComparison = this._databaseTopologyComparison?.internalValue;
    }
    if (this._dcrumDecoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoder = this._dcrumDecoder?.internalValue;
    }
    if (this._dcrumDecoderComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoderComparison = this._dcrumDecoderComparison?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._entityIdComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdComparison = this._entityIdComparison?.internalValue;
    }
    if (this._hostTech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTech = this._hostTech?.internalValue;
    }
    if (this._hypervisor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor?.internalValue;
    }
    if (this._hypervisorTypeComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorTypeComparision = this._hypervisorTypeComparision?.internalValue;
    }
    if (this._indexedName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedName = this._indexedName?.internalValue;
    }
    if (this._indexedNameComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedNameComparison = this._indexedNameComparison?.internalValue;
    }
    if (this._indexedString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedString = this._indexedString?.internalValue;
    }
    if (this._indexedStringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedStringComparison = this._indexedStringComparison?.internalValue;
    }
    if (this._indexedTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTag = this._indexedTag?.internalValue;
    }
    if (this._indexedTagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTagComparison = this._indexedTagComparison?.internalValue;
    }
    if (this._integer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer?.internalValue;
    }
    if (this._integerComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerComparison = this._integerComparison?.internalValue;
    }
    if (this._ipaddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress?.internalValue;
    }
    if (this._ipaddressComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressComparison = this._ipaddressComparison?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._mobilePlatform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatform = this._mobilePlatform?.internalValue;
    }
    if (this._mobilePlatformComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatformComparison = this._mobilePlatformComparison?.internalValue;
    }
    if (this._osArch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch?.internalValue;
    }
    if (this._osType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType?.internalValue;
    }
    if (this._osarchitectureComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osarchitectureComparison = this._osarchitectureComparison?.internalValue;
    }
    if (this._ostypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ostypeComparison = this._ostypeComparison?.internalValue;
    }
    if (this._paasType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasType = this._paasType?.internalValue;
    }
    if (this._paasTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasTypeComparison = this._paasTypeComparison?.internalValue;
    }
    if (this._processMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadata = this._processMetadata?.internalValue;
    }
    if (this._processMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadataConditionKey = this._processMetadataConditionKey?.internalValue;
    }
    if (this._serviceTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopology = this._serviceTopology?.internalValue;
    }
    if (this._serviceTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopologyComparison = this._serviceTopologyComparison?.internalValue;
    }
    if (this._serviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType?.internalValue;
    }
    if (this._serviceTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypeComparison = this._serviceTypeComparison?.internalValue;
    }
    if (this._simpleHostTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleHostTechComparison = this._simpleHostTechComparison?.internalValue;
    }
    if (this._simpleTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleTechComparison = this._simpleTechComparison?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringComparison = this._stringComparison?.internalValue;
    }
    if (this._stringConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConditionKey = this._stringConditionKey?.internalValue;
    }
    if (this._stringKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringKey = this._stringKey?.internalValue;
    }
    if (this._syntheticEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngine = this._syntheticEngine?.internalValue;
    }
    if (this._syntheticEngineTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngineTypeComparison = this._syntheticEngineTypeComparison?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._tagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagComparison = this._tagComparison?.internalValue;
    }
    if (this._tech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tech = this._tech?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._applicationType.internalValue = undefined;
      this._applicationTypeComparison.internalValue = undefined;
      this._azureComputeMode.internalValue = undefined;
      this._azureComputeModeComparison.internalValue = undefined;
      this._azureSku.internalValue = undefined;
      this._azureSkuComparision.internalValue = undefined;
      this._baseComparisonBasic.internalValue = undefined;
      this._baseConditionKey.internalValue = undefined;
      this._bitness.internalValue = undefined;
      this._bitnessComparision.internalValue = undefined;
      this._cloudType.internalValue = undefined;
      this._cloudTypeComparison.internalValue = undefined;
      this._comparison.internalValue = undefined;
      this._customApplicationType.internalValue = undefined;
      this._customApplicationTypeComparison.internalValue = undefined;
      this._customHostMetadata.internalValue = undefined;
      this._customHostMetadataConditionKey.internalValue = undefined;
      this._customProcessMetadata.internalValue = undefined;
      this._customProcessMetadataConditionKey.internalValue = undefined;
      this._databaseTopology.internalValue = undefined;
      this._databaseTopologyComparison.internalValue = undefined;
      this._dcrumDecoder.internalValue = undefined;
      this._dcrumDecoderComparison.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._entityIdComparison.internalValue = undefined;
      this._hostTech.internalValue = undefined;
      this._hypervisor.internalValue = undefined;
      this._hypervisorTypeComparision.internalValue = undefined;
      this._indexedName.internalValue = undefined;
      this._indexedNameComparison.internalValue = undefined;
      this._indexedString.internalValue = undefined;
      this._indexedStringComparison.internalValue = undefined;
      this._indexedTag.internalValue = undefined;
      this._indexedTagComparison.internalValue = undefined;
      this._integer.internalValue = undefined;
      this._integerComparison.internalValue = undefined;
      this._ipaddress.internalValue = undefined;
      this._ipaddressComparison.internalValue = undefined;
      this._key.internalValue = undefined;
      this._mobilePlatform.internalValue = undefined;
      this._mobilePlatformComparison.internalValue = undefined;
      this._osArch.internalValue = undefined;
      this._osType.internalValue = undefined;
      this._osarchitectureComparison.internalValue = undefined;
      this._ostypeComparison.internalValue = undefined;
      this._paasType.internalValue = undefined;
      this._paasTypeComparison.internalValue = undefined;
      this._processMetadata.internalValue = undefined;
      this._processMetadataConditionKey.internalValue = undefined;
      this._serviceTopology.internalValue = undefined;
      this._serviceTopologyComparison.internalValue = undefined;
      this._serviceType.internalValue = undefined;
      this._serviceTypeComparison.internalValue = undefined;
      this._simpleHostTechComparison.internalValue = undefined;
      this._simpleTechComparison.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringComparison.internalValue = undefined;
      this._stringConditionKey.internalValue = undefined;
      this._stringKey.internalValue = undefined;
      this._syntheticEngine.internalValue = undefined;
      this._syntheticEngineTypeComparison.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._tagComparison.internalValue = undefined;
      this._tech.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._applicationType.internalValue = value.applicationType;
      this._applicationTypeComparison.internalValue = value.applicationTypeComparison;
      this._azureComputeMode.internalValue = value.azureComputeMode;
      this._azureComputeModeComparison.internalValue = value.azureComputeModeComparison;
      this._azureSku.internalValue = value.azureSku;
      this._azureSkuComparision.internalValue = value.azureSkuComparision;
      this._baseComparisonBasic.internalValue = value.baseComparisonBasic;
      this._baseConditionKey.internalValue = value.baseConditionKey;
      this._bitness.internalValue = value.bitness;
      this._bitnessComparision.internalValue = value.bitnessComparision;
      this._cloudType.internalValue = value.cloudType;
      this._cloudTypeComparison.internalValue = value.cloudTypeComparison;
      this._comparison.internalValue = value.comparison;
      this._customApplicationType.internalValue = value.customApplicationType;
      this._customApplicationTypeComparison.internalValue = value.customApplicationTypeComparison;
      this._customHostMetadata.internalValue = value.customHostMetadata;
      this._customHostMetadataConditionKey.internalValue = value.customHostMetadataConditionKey;
      this._customProcessMetadata.internalValue = value.customProcessMetadata;
      this._customProcessMetadataConditionKey.internalValue = value.customProcessMetadataConditionKey;
      this._databaseTopology.internalValue = value.databaseTopology;
      this._databaseTopologyComparison.internalValue = value.databaseTopologyComparison;
      this._dcrumDecoder.internalValue = value.dcrumDecoder;
      this._dcrumDecoderComparison.internalValue = value.dcrumDecoderComparison;
      this._entity.internalValue = value.entity;
      this._entityIdComparison.internalValue = value.entityIdComparison;
      this._hostTech.internalValue = value.hostTech;
      this._hypervisor.internalValue = value.hypervisor;
      this._hypervisorTypeComparision.internalValue = value.hypervisorTypeComparision;
      this._indexedName.internalValue = value.indexedName;
      this._indexedNameComparison.internalValue = value.indexedNameComparison;
      this._indexedString.internalValue = value.indexedString;
      this._indexedStringComparison.internalValue = value.indexedStringComparison;
      this._indexedTag.internalValue = value.indexedTag;
      this._indexedTagComparison.internalValue = value.indexedTagComparison;
      this._integer.internalValue = value.integer;
      this._integerComparison.internalValue = value.integerComparison;
      this._ipaddress.internalValue = value.ipaddress;
      this._ipaddressComparison.internalValue = value.ipaddressComparison;
      this._key.internalValue = value.key;
      this._mobilePlatform.internalValue = value.mobilePlatform;
      this._mobilePlatformComparison.internalValue = value.mobilePlatformComparison;
      this._osArch.internalValue = value.osArch;
      this._osType.internalValue = value.osType;
      this._osarchitectureComparison.internalValue = value.osarchitectureComparison;
      this._ostypeComparison.internalValue = value.ostypeComparison;
      this._paasType.internalValue = value.paasType;
      this._paasTypeComparison.internalValue = value.paasTypeComparison;
      this._processMetadata.internalValue = value.processMetadata;
      this._processMetadataConditionKey.internalValue = value.processMetadataConditionKey;
      this._serviceTopology.internalValue = value.serviceTopology;
      this._serviceTopologyComparison.internalValue = value.serviceTopologyComparison;
      this._serviceType.internalValue = value.serviceType;
      this._serviceTypeComparison.internalValue = value.serviceTypeComparison;
      this._simpleHostTechComparison.internalValue = value.simpleHostTechComparison;
      this._simpleTechComparison.internalValue = value.simpleTechComparison;
      this._string.internalValue = value.string;
      this._stringComparison.internalValue = value.stringComparison;
      this._stringConditionKey.internalValue = value.stringConditionKey;
      this._stringKey.internalValue = value.stringKey;
      this._syntheticEngine.internalValue = value.syntheticEngine;
      this._syntheticEngineTypeComparison.internalValue = value.syntheticEngineTypeComparison;
      this._tag.internalValue = value.tag;
      this._tagComparison.internalValue = value.tagComparison;
      this._tech.internalValue = value.tech;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType = new ServiceNamingConditionsConditionApplicationTypeList(this, "application_type", false);
  public get applicationType() {
    return this._applicationType;
  }
  public putApplicationType(value: ServiceNamingConditionsConditionApplicationType[] | cdktf.IResolvable) {
    this._applicationType.internalValue = value;
  }
  public resetApplicationType() {
    this._applicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType.internalValue;
  }

  // application_type_comparison - computed: false, optional: true, required: false
  private _applicationTypeComparison = new ServiceNamingConditionsConditionApplicationTypeComparisonList(this, "application_type_comparison", false);
  public get applicationTypeComparison() {
    return this._applicationTypeComparison;
  }
  public putApplicationTypeComparison(value: ServiceNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable) {
    this._applicationTypeComparison.internalValue = value;
  }
  public resetApplicationTypeComparison() {
    this._applicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeComparisonInput() {
    return this._applicationTypeComparison.internalValue;
  }

  // azure_compute_mode - computed: false, optional: true, required: false
  private _azureComputeMode = new ServiceNamingConditionsConditionAzureComputeModeList(this, "azure_compute_mode", false);
  public get azureComputeMode() {
    return this._azureComputeMode;
  }
  public putAzureComputeMode(value: ServiceNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable) {
    this._azureComputeMode.internalValue = value;
  }
  public resetAzureComputeMode() {
    this._azureComputeMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeInput() {
    return this._azureComputeMode.internalValue;
  }

  // azure_compute_mode_comparison - computed: false, optional: true, required: false
  private _azureComputeModeComparison = new ServiceNamingConditionsConditionAzureComputeModeComparisonList(this, "azure_compute_mode_comparison", false);
  public get azureComputeModeComparison() {
    return this._azureComputeModeComparison;
  }
  public putAzureComputeModeComparison(value: ServiceNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable) {
    this._azureComputeModeComparison.internalValue = value;
  }
  public resetAzureComputeModeComparison() {
    this._azureComputeModeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeComparisonInput() {
    return this._azureComputeModeComparison.internalValue;
  }

  // azure_sku - computed: false, optional: true, required: false
  private _azureSku = new ServiceNamingConditionsConditionAzureSkuList(this, "azure_sku", false);
  public get azureSku() {
    return this._azureSku;
  }
  public putAzureSku(value: ServiceNamingConditionsConditionAzureSku[] | cdktf.IResolvable) {
    this._azureSku.internalValue = value;
  }
  public resetAzureSku() {
    this._azureSku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuInput() {
    return this._azureSku.internalValue;
  }

  // azure_sku_comparision - computed: false, optional: true, required: false
  private _azureSkuComparision = new ServiceNamingConditionsConditionAzureSkuComparisionList(this, "azure_sku_comparision", false);
  public get azureSkuComparision() {
    return this._azureSkuComparision;
  }
  public putAzureSkuComparision(value: ServiceNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable) {
    this._azureSkuComparision.internalValue = value;
  }
  public resetAzureSkuComparision() {
    this._azureSkuComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuComparisionInput() {
    return this._azureSkuComparision.internalValue;
  }

  // base_comparison_basic - computed: false, optional: true, required: false
  private _baseComparisonBasic = new ServiceNamingConditionsConditionBaseComparisonBasicList(this, "base_comparison_basic", false);
  public get baseComparisonBasic() {
    return this._baseComparisonBasic;
  }
  public putBaseComparisonBasic(value: ServiceNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable) {
    this._baseComparisonBasic.internalValue = value;
  }
  public resetBaseComparisonBasic() {
    this._baseComparisonBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseComparisonBasicInput() {
    return this._baseComparisonBasic.internalValue;
  }

  // base_condition_key - computed: false, optional: true, required: false
  private _baseConditionKey = new ServiceNamingConditionsConditionBaseConditionKeyList(this, "base_condition_key", false);
  public get baseConditionKey() {
    return this._baseConditionKey;
  }
  public putBaseConditionKey(value: ServiceNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable) {
    this._baseConditionKey.internalValue = value;
  }
  public resetBaseConditionKey() {
    this._baseConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseConditionKeyInput() {
    return this._baseConditionKey.internalValue;
  }

  // bitness - computed: false, optional: true, required: false
  private _bitness = new ServiceNamingConditionsConditionBitnessList(this, "bitness", false);
  public get bitness() {
    return this._bitness;
  }
  public putBitness(value: ServiceNamingConditionsConditionBitness[] | cdktf.IResolvable) {
    this._bitness.internalValue = value;
  }
  public resetBitness() {
    this._bitness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessInput() {
    return this._bitness.internalValue;
  }

  // bitness_comparision - computed: false, optional: true, required: false
  private _bitnessComparision = new ServiceNamingConditionsConditionBitnessComparisionList(this, "bitness_comparision", false);
  public get bitnessComparision() {
    return this._bitnessComparision;
  }
  public putBitnessComparision(value: ServiceNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable) {
    this._bitnessComparision.internalValue = value;
  }
  public resetBitnessComparision() {
    this._bitnessComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessComparisionInput() {
    return this._bitnessComparision.internalValue;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType = new ServiceNamingConditionsConditionCloudTypeList(this, "cloud_type", false);
  public get cloudType() {
    return this._cloudType;
  }
  public putCloudType(value: ServiceNamingConditionsConditionCloudType[] | cdktf.IResolvable) {
    this._cloudType.internalValue = value;
  }
  public resetCloudType() {
    this._cloudType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType.internalValue;
  }

  // cloud_type_comparison - computed: false, optional: true, required: false
  private _cloudTypeComparison = new ServiceNamingConditionsConditionCloudTypeComparisonList(this, "cloud_type_comparison", false);
  public get cloudTypeComparison() {
    return this._cloudTypeComparison;
  }
  public putCloudTypeComparison(value: ServiceNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable) {
    this._cloudTypeComparison.internalValue = value;
  }
  public resetCloudTypeComparison() {
    this._cloudTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeComparisonInput() {
    return this._cloudTypeComparison.internalValue;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new ServiceNamingConditionsConditionComparisonList(this, "comparison", false);
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: ServiceNamingConditionsConditionComparison[] | cdktf.IResolvable) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }

  // custom_application_type - computed: false, optional: true, required: false
  private _customApplicationType = new ServiceNamingConditionsConditionCustomApplicationTypeList(this, "custom_application_type", false);
  public get customApplicationType() {
    return this._customApplicationType;
  }
  public putCustomApplicationType(value: ServiceNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable) {
    this._customApplicationType.internalValue = value;
  }
  public resetCustomApplicationType() {
    this._customApplicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeInput() {
    return this._customApplicationType.internalValue;
  }

  // custom_application_type_comparison - computed: false, optional: true, required: false
  private _customApplicationTypeComparison = new ServiceNamingConditionsConditionCustomApplicationTypeComparisonList(this, "custom_application_type_comparison", false);
  public get customApplicationTypeComparison() {
    return this._customApplicationTypeComparison;
  }
  public putCustomApplicationTypeComparison(value: ServiceNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable) {
    this._customApplicationTypeComparison.internalValue = value;
  }
  public resetCustomApplicationTypeComparison() {
    this._customApplicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeComparisonInput() {
    return this._customApplicationTypeComparison.internalValue;
  }

  // custom_host_metadata - computed: false, optional: true, required: false
  private _customHostMetadata = new ServiceNamingConditionsConditionCustomHostMetadataList(this, "custom_host_metadata", false);
  public get customHostMetadata() {
    return this._customHostMetadata;
  }
  public putCustomHostMetadata(value: ServiceNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable) {
    this._customHostMetadata.internalValue = value;
  }
  public resetCustomHostMetadata() {
    this._customHostMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataInput() {
    return this._customHostMetadata.internalValue;
  }

  // custom_host_metadata_condition_key - computed: false, optional: true, required: false
  private _customHostMetadataConditionKey = new ServiceNamingConditionsConditionCustomHostMetadataConditionKeyList(this, "custom_host_metadata_condition_key", false);
  public get customHostMetadataConditionKey() {
    return this._customHostMetadataConditionKey;
  }
  public putCustomHostMetadataConditionKey(value: ServiceNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable) {
    this._customHostMetadataConditionKey.internalValue = value;
  }
  public resetCustomHostMetadataConditionKey() {
    this._customHostMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataConditionKeyInput() {
    return this._customHostMetadataConditionKey.internalValue;
  }

  // custom_process_metadata - computed: false, optional: true, required: false
  private _customProcessMetadata = new ServiceNamingConditionsConditionCustomProcessMetadataList(this, "custom_process_metadata", false);
  public get customProcessMetadata() {
    return this._customProcessMetadata;
  }
  public putCustomProcessMetadata(value: ServiceNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable) {
    this._customProcessMetadata.internalValue = value;
  }
  public resetCustomProcessMetadata() {
    this._customProcessMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataInput() {
    return this._customProcessMetadata.internalValue;
  }

  // custom_process_metadata_condition_key - computed: false, optional: true, required: false
  private _customProcessMetadataConditionKey = new ServiceNamingConditionsConditionCustomProcessMetadataConditionKeyList(this, "custom_process_metadata_condition_key", false);
  public get customProcessMetadataConditionKey() {
    return this._customProcessMetadataConditionKey;
  }
  public putCustomProcessMetadataConditionKey(value: ServiceNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._customProcessMetadataConditionKey.internalValue = value;
  }
  public resetCustomProcessMetadataConditionKey() {
    this._customProcessMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataConditionKeyInput() {
    return this._customProcessMetadataConditionKey.internalValue;
  }

  // database_topology - computed: false, optional: true, required: false
  private _databaseTopology = new ServiceNamingConditionsConditionDatabaseTopologyList(this, "database_topology", false);
  public get databaseTopology() {
    return this._databaseTopology;
  }
  public putDatabaseTopology(value: ServiceNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable) {
    this._databaseTopology.internalValue = value;
  }
  public resetDatabaseTopology() {
    this._databaseTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyInput() {
    return this._databaseTopology.internalValue;
  }

  // database_topology_comparison - computed: false, optional: true, required: false
  private _databaseTopologyComparison = new ServiceNamingConditionsConditionDatabaseTopologyComparisonList(this, "database_topology_comparison", false);
  public get databaseTopologyComparison() {
    return this._databaseTopologyComparison;
  }
  public putDatabaseTopologyComparison(value: ServiceNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable) {
    this._databaseTopologyComparison.internalValue = value;
  }
  public resetDatabaseTopologyComparison() {
    this._databaseTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyComparisonInput() {
    return this._databaseTopologyComparison.internalValue;
  }

  // dcrum_decoder - computed: false, optional: true, required: false
  private _dcrumDecoder = new ServiceNamingConditionsConditionDcrumDecoderList(this, "dcrum_decoder", false);
  public get dcrumDecoder() {
    return this._dcrumDecoder;
  }
  public putDcrumDecoder(value: ServiceNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable) {
    this._dcrumDecoder.internalValue = value;
  }
  public resetDcrumDecoder() {
    this._dcrumDecoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderInput() {
    return this._dcrumDecoder.internalValue;
  }

  // dcrum_decoder_comparison - computed: false, optional: true, required: false
  private _dcrumDecoderComparison = new ServiceNamingConditionsConditionDcrumDecoderComparisonList(this, "dcrum_decoder_comparison", false);
  public get dcrumDecoderComparison() {
    return this._dcrumDecoderComparison;
  }
  public putDcrumDecoderComparison(value: ServiceNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable) {
    this._dcrumDecoderComparison.internalValue = value;
  }
  public resetDcrumDecoderComparison() {
    this._dcrumDecoderComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderComparisonInput() {
    return this._dcrumDecoderComparison.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new ServiceNamingConditionsConditionEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: ServiceNamingConditionsConditionEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // entity_id_comparison - computed: false, optional: true, required: false
  private _entityIdComparison = new ServiceNamingConditionsConditionEntityIdComparisonList(this, "entity_id_comparison", false);
  public get entityIdComparison() {
    return this._entityIdComparison;
  }
  public putEntityIdComparison(value: ServiceNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable) {
    this._entityIdComparison.internalValue = value;
  }
  public resetEntityIdComparison() {
    this._entityIdComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdComparisonInput() {
    return this._entityIdComparison.internalValue;
  }

  // host_tech - computed: false, optional: true, required: false
  private _hostTech = new ServiceNamingConditionsConditionHostTechList(this, "host_tech", false);
  public get hostTech() {
    return this._hostTech;
  }
  public putHostTech(value: ServiceNamingConditionsConditionHostTech[] | cdktf.IResolvable) {
    this._hostTech.internalValue = value;
  }
  public resetHostTech() {
    this._hostTech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTechInput() {
    return this._hostTech.internalValue;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor = new ServiceNamingConditionsConditionHypervisorList(this, "hypervisor", false);
  public get hypervisor() {
    return this._hypervisor;
  }
  public putHypervisor(value: ServiceNamingConditionsConditionHypervisor[] | cdktf.IResolvable) {
    this._hypervisor.internalValue = value;
  }
  public resetHypervisor() {
    this._hypervisor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor.internalValue;
  }

  // hypervisor_type_comparision - computed: false, optional: true, required: false
  private _hypervisorTypeComparision = new ServiceNamingConditionsConditionHypervisorTypeComparisionList(this, "hypervisor_type_comparision", false);
  public get hypervisorTypeComparision() {
    return this._hypervisorTypeComparision;
  }
  public putHypervisorTypeComparision(value: ServiceNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable) {
    this._hypervisorTypeComparision.internalValue = value;
  }
  public resetHypervisorTypeComparision() {
    this._hypervisorTypeComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeComparisionInput() {
    return this._hypervisorTypeComparision.internalValue;
  }

  // indexed_name - computed: false, optional: true, required: false
  private _indexedName = new ServiceNamingConditionsConditionIndexedNameList(this, "indexed_name", false);
  public get indexedName() {
    return this._indexedName;
  }
  public putIndexedName(value: ServiceNamingConditionsConditionIndexedName[] | cdktf.IResolvable) {
    this._indexedName.internalValue = value;
  }
  public resetIndexedName() {
    this._indexedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameInput() {
    return this._indexedName.internalValue;
  }

  // indexed_name_comparison - computed: false, optional: true, required: false
  private _indexedNameComparison = new ServiceNamingConditionsConditionIndexedNameComparisonList(this, "indexed_name_comparison", false);
  public get indexedNameComparison() {
    return this._indexedNameComparison;
  }
  public putIndexedNameComparison(value: ServiceNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable) {
    this._indexedNameComparison.internalValue = value;
  }
  public resetIndexedNameComparison() {
    this._indexedNameComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameComparisonInput() {
    return this._indexedNameComparison.internalValue;
  }

  // indexed_string - computed: false, optional: true, required: false
  private _indexedString = new ServiceNamingConditionsConditionIndexedStringList(this, "indexed_string", false);
  public get indexedString() {
    return this._indexedString;
  }
  public putIndexedString(value: ServiceNamingConditionsConditionIndexedString[] | cdktf.IResolvable) {
    this._indexedString.internalValue = value;
  }
  public resetIndexedString() {
    this._indexedString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringInput() {
    return this._indexedString.internalValue;
  }

  // indexed_string_comparison - computed: false, optional: true, required: false
  private _indexedStringComparison = new ServiceNamingConditionsConditionIndexedStringComparisonList(this, "indexed_string_comparison", false);
  public get indexedStringComparison() {
    return this._indexedStringComparison;
  }
  public putIndexedStringComparison(value: ServiceNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable) {
    this._indexedStringComparison.internalValue = value;
  }
  public resetIndexedStringComparison() {
    this._indexedStringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringComparisonInput() {
    return this._indexedStringComparison.internalValue;
  }

  // indexed_tag - computed: false, optional: true, required: false
  private _indexedTag = new ServiceNamingConditionsConditionIndexedTagList(this, "indexed_tag", false);
  public get indexedTag() {
    return this._indexedTag;
  }
  public putIndexedTag(value: ServiceNamingConditionsConditionIndexedTag[] | cdktf.IResolvable) {
    this._indexedTag.internalValue = value;
  }
  public resetIndexedTag() {
    this._indexedTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagInput() {
    return this._indexedTag.internalValue;
  }

  // indexed_tag_comparison - computed: false, optional: true, required: false
  private _indexedTagComparison = new ServiceNamingConditionsConditionIndexedTagComparisonList(this, "indexed_tag_comparison", false);
  public get indexedTagComparison() {
    return this._indexedTagComparison;
  }
  public putIndexedTagComparison(value: ServiceNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable) {
    this._indexedTagComparison.internalValue = value;
  }
  public resetIndexedTagComparison() {
    this._indexedTagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagComparisonInput() {
    return this._indexedTagComparison.internalValue;
  }

  // integer - computed: false, optional: true, required: false
  private _integer = new ServiceNamingConditionsConditionIntegerList(this, "integer", false);
  public get integer() {
    return this._integer;
  }
  public putInteger(value: ServiceNamingConditionsConditionInteger[] | cdktf.IResolvable) {
    this._integer.internalValue = value;
  }
  public resetInteger() {
    this._integer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer.internalValue;
  }

  // integer_comparison - computed: false, optional: true, required: false
  private _integerComparison = new ServiceNamingConditionsConditionIntegerComparisonList(this, "integer_comparison", false);
  public get integerComparison() {
    return this._integerComparison;
  }
  public putIntegerComparison(value: ServiceNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable) {
    this._integerComparison.internalValue = value;
  }
  public resetIntegerComparison() {
    this._integerComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerComparisonInput() {
    return this._integerComparison.internalValue;
  }

  // ipaddress - computed: false, optional: true, required: false
  private _ipaddress = new ServiceNamingConditionsConditionIpaddressList(this, "ipaddress", false);
  public get ipaddress() {
    return this._ipaddress;
  }
  public putIpaddress(value: ServiceNamingConditionsConditionIpaddress[] | cdktf.IResolvable) {
    this._ipaddress.internalValue = value;
  }
  public resetIpaddress() {
    this._ipaddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress.internalValue;
  }

  // ipaddress_comparison - computed: false, optional: true, required: false
  private _ipaddressComparison = new ServiceNamingConditionsConditionIpaddressComparisonList(this, "ipaddress_comparison", false);
  public get ipaddressComparison() {
    return this._ipaddressComparison;
  }
  public putIpaddressComparison(value: ServiceNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable) {
    this._ipaddressComparison.internalValue = value;
  }
  public resetIpaddressComparison() {
    this._ipaddressComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressComparisonInput() {
    return this._ipaddressComparison.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ServiceNamingConditionsConditionKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ServiceNamingConditionsConditionKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // mobile_platform - computed: false, optional: true, required: false
  private _mobilePlatform = new ServiceNamingConditionsConditionMobilePlatformList(this, "mobile_platform", false);
  public get mobilePlatform() {
    return this._mobilePlatform;
  }
  public putMobilePlatform(value: ServiceNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable) {
    this._mobilePlatform.internalValue = value;
  }
  public resetMobilePlatform() {
    this._mobilePlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformInput() {
    return this._mobilePlatform.internalValue;
  }

  // mobile_platform_comparison - computed: false, optional: true, required: false
  private _mobilePlatformComparison = new ServiceNamingConditionsConditionMobilePlatformComparisonList(this, "mobile_platform_comparison", false);
  public get mobilePlatformComparison() {
    return this._mobilePlatformComparison;
  }
  public putMobilePlatformComparison(value: ServiceNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable) {
    this._mobilePlatformComparison.internalValue = value;
  }
  public resetMobilePlatformComparison() {
    this._mobilePlatformComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformComparisonInput() {
    return this._mobilePlatformComparison.internalValue;
  }

  // os_arch - computed: false, optional: true, required: false
  private _osArch = new ServiceNamingConditionsConditionOsArchList(this, "os_arch", false);
  public get osArch() {
    return this._osArch;
  }
  public putOsArch(value: ServiceNamingConditionsConditionOsArch[] | cdktf.IResolvable) {
    this._osArch.internalValue = value;
  }
  public resetOsArch() {
    this._osArch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch.internalValue;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType = new ServiceNamingConditionsConditionOsTypeList(this, "os_type", false);
  public get osType() {
    return this._osType;
  }
  public putOsType(value: ServiceNamingConditionsConditionOsType[] | cdktf.IResolvable) {
    this._osType.internalValue = value;
  }
  public resetOsType() {
    this._osType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType.internalValue;
  }

  // osarchitecture_comparison - computed: false, optional: true, required: false
  private _osarchitectureComparison = new ServiceNamingConditionsConditionOsarchitectureComparisonList(this, "osarchitecture_comparison", false);
  public get osarchitectureComparison() {
    return this._osarchitectureComparison;
  }
  public putOsarchitectureComparison(value: ServiceNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable) {
    this._osarchitectureComparison.internalValue = value;
  }
  public resetOsarchitectureComparison() {
    this._osarchitectureComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osarchitectureComparisonInput() {
    return this._osarchitectureComparison.internalValue;
  }

  // ostype_comparison - computed: false, optional: true, required: false
  private _ostypeComparison = new ServiceNamingConditionsConditionOstypeComparisonList(this, "ostype_comparison", false);
  public get ostypeComparison() {
    return this._ostypeComparison;
  }
  public putOstypeComparison(value: ServiceNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable) {
    this._ostypeComparison.internalValue = value;
  }
  public resetOstypeComparison() {
    this._ostypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostypeComparisonInput() {
    return this._ostypeComparison.internalValue;
  }

  // paas_type - computed: false, optional: true, required: false
  private _paasType = new ServiceNamingConditionsConditionPaasTypeList(this, "paas_type", false);
  public get paasType() {
    return this._paasType;
  }
  public putPaasType(value: ServiceNamingConditionsConditionPaasType[] | cdktf.IResolvable) {
    this._paasType.internalValue = value;
  }
  public resetPaasType() {
    this._paasType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeInput() {
    return this._paasType.internalValue;
  }

  // paas_type_comparison - computed: false, optional: true, required: false
  private _paasTypeComparison = new ServiceNamingConditionsConditionPaasTypeComparisonList(this, "paas_type_comparison", false);
  public get paasTypeComparison() {
    return this._paasTypeComparison;
  }
  public putPaasTypeComparison(value: ServiceNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable) {
    this._paasTypeComparison.internalValue = value;
  }
  public resetPaasTypeComparison() {
    this._paasTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeComparisonInput() {
    return this._paasTypeComparison.internalValue;
  }

  // process_metadata - computed: false, optional: true, required: false
  private _processMetadata = new ServiceNamingConditionsConditionProcessMetadataList(this, "process_metadata", false);
  public get processMetadata() {
    return this._processMetadata;
  }
  public putProcessMetadata(value: ServiceNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable) {
    this._processMetadata.internalValue = value;
  }
  public resetProcessMetadata() {
    this._processMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataInput() {
    return this._processMetadata.internalValue;
  }

  // process_metadata_condition_key - computed: false, optional: true, required: false
  private _processMetadataConditionKey = new ServiceNamingConditionsConditionProcessMetadataConditionKeyList(this, "process_metadata_condition_key", false);
  public get processMetadataConditionKey() {
    return this._processMetadataConditionKey;
  }
  public putProcessMetadataConditionKey(value: ServiceNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._processMetadataConditionKey.internalValue = value;
  }
  public resetProcessMetadataConditionKey() {
    this._processMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataConditionKeyInput() {
    return this._processMetadataConditionKey.internalValue;
  }

  // service_topology - computed: false, optional: true, required: false
  private _serviceTopology = new ServiceNamingConditionsConditionServiceTopologyList(this, "service_topology", false);
  public get serviceTopology() {
    return this._serviceTopology;
  }
  public putServiceTopology(value: ServiceNamingConditionsConditionServiceTopology[] | cdktf.IResolvable) {
    this._serviceTopology.internalValue = value;
  }
  public resetServiceTopology() {
    this._serviceTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyInput() {
    return this._serviceTopology.internalValue;
  }

  // service_topology_comparison - computed: false, optional: true, required: false
  private _serviceTopologyComparison = new ServiceNamingConditionsConditionServiceTopologyComparisonList(this, "service_topology_comparison", false);
  public get serviceTopologyComparison() {
    return this._serviceTopologyComparison;
  }
  public putServiceTopologyComparison(value: ServiceNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable) {
    this._serviceTopologyComparison.internalValue = value;
  }
  public resetServiceTopologyComparison() {
    this._serviceTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyComparisonInput() {
    return this._serviceTopologyComparison.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType = new ServiceNamingConditionsConditionServiceTypeList(this, "service_type", false);
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: ServiceNamingConditionsConditionServiceType[] | cdktf.IResolvable) {
    this._serviceType.internalValue = value;
  }
  public resetServiceType() {
    this._serviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // service_type_comparison - computed: false, optional: true, required: false
  private _serviceTypeComparison = new ServiceNamingConditionsConditionServiceTypeComparisonList(this, "service_type_comparison", false);
  public get serviceTypeComparison() {
    return this._serviceTypeComparison;
  }
  public putServiceTypeComparison(value: ServiceNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable) {
    this._serviceTypeComparison.internalValue = value;
  }
  public resetServiceTypeComparison() {
    this._serviceTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeComparisonInput() {
    return this._serviceTypeComparison.internalValue;
  }

  // simple_host_tech_comparison - computed: false, optional: true, required: false
  private _simpleHostTechComparison = new ServiceNamingConditionsConditionSimpleHostTechComparisonList(this, "simple_host_tech_comparison", false);
  public get simpleHostTechComparison() {
    return this._simpleHostTechComparison;
  }
  public putSimpleHostTechComparison(value: ServiceNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable) {
    this._simpleHostTechComparison.internalValue = value;
  }
  public resetSimpleHostTechComparison() {
    this._simpleHostTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleHostTechComparisonInput() {
    return this._simpleHostTechComparison.internalValue;
  }

  // simple_tech_comparison - computed: false, optional: true, required: false
  private _simpleTechComparison = new ServiceNamingConditionsConditionSimpleTechComparisonList(this, "simple_tech_comparison", false);
  public get simpleTechComparison() {
    return this._simpleTechComparison;
  }
  public putSimpleTechComparison(value: ServiceNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable) {
    this._simpleTechComparison.internalValue = value;
  }
  public resetSimpleTechComparison() {
    this._simpleTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleTechComparisonInput() {
    return this._simpleTechComparison.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new ServiceNamingConditionsConditionStringList(this, "string", false);
  public get string() {
    return this._string;
  }
  public putString(value: ServiceNamingConditionsConditionString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_comparison - computed: false, optional: true, required: false
  private _stringComparison = new ServiceNamingConditionsConditionStringComparisonList(this, "string_comparison", false);
  public get stringComparison() {
    return this._stringComparison;
  }
  public putStringComparison(value: ServiceNamingConditionsConditionStringComparison[] | cdktf.IResolvable) {
    this._stringComparison.internalValue = value;
  }
  public resetStringComparison() {
    this._stringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringComparisonInput() {
    return this._stringComparison.internalValue;
  }

  // string_condition_key - computed: false, optional: true, required: false
  private _stringConditionKey = new ServiceNamingConditionsConditionStringConditionKeyList(this, "string_condition_key", false);
  public get stringConditionKey() {
    return this._stringConditionKey;
  }
  public putStringConditionKey(value: ServiceNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable) {
    this._stringConditionKey.internalValue = value;
  }
  public resetStringConditionKey() {
    this._stringConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionKeyInput() {
    return this._stringConditionKey.internalValue;
  }

  // string_key - computed: false, optional: true, required: false
  private _stringKey = new ServiceNamingConditionsConditionStringKeyList(this, "string_key", false);
  public get stringKey() {
    return this._stringKey;
  }
  public putStringKey(value: ServiceNamingConditionsConditionStringKey[] | cdktf.IResolvable) {
    this._stringKey.internalValue = value;
  }
  public resetStringKey() {
    this._stringKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringKeyInput() {
    return this._stringKey.internalValue;
  }

  // synthetic_engine - computed: false, optional: true, required: false
  private _syntheticEngine = new ServiceNamingConditionsConditionSyntheticEngineList(this, "synthetic_engine", false);
  public get syntheticEngine() {
    return this._syntheticEngine;
  }
  public putSyntheticEngine(value: ServiceNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable) {
    this._syntheticEngine.internalValue = value;
  }
  public resetSyntheticEngine() {
    this._syntheticEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineInput() {
    return this._syntheticEngine.internalValue;
  }

  // synthetic_engine_type_comparison - computed: false, optional: true, required: false
  private _syntheticEngineTypeComparison = new ServiceNamingConditionsConditionSyntheticEngineTypeComparisonList(this, "synthetic_engine_type_comparison", false);
  public get syntheticEngineTypeComparison() {
    return this._syntheticEngineTypeComparison;
  }
  public putSyntheticEngineTypeComparison(value: ServiceNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable) {
    this._syntheticEngineTypeComparison.internalValue = value;
  }
  public resetSyntheticEngineTypeComparison() {
    this._syntheticEngineTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineTypeComparisonInput() {
    return this._syntheticEngineTypeComparison.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ServiceNamingConditionsConditionTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ServiceNamingConditionsConditionTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tag_comparison - computed: false, optional: true, required: false
  private _tagComparison = new ServiceNamingConditionsConditionTagComparisonList(this, "tag_comparison", false);
  public get tagComparison() {
    return this._tagComparison;
  }
  public putTagComparison(value: ServiceNamingConditionsConditionTagComparison[] | cdktf.IResolvable) {
    this._tagComparison.internalValue = value;
  }
  public resetTagComparison() {
    this._tagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagComparisonInput() {
    return this._tagComparison.internalValue;
  }

  // tech - computed: false, optional: true, required: false
  private _tech = new ServiceNamingConditionsConditionTechList(this, "tech", false);
  public get tech() {
    return this._tech;
  }
  public putTech(value: ServiceNamingConditionsConditionTech[] | cdktf.IResolvable) {
    this._tech.internalValue = value;
  }
  public resetTech() {
    this._tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techInput() {
    return this._tech.internalValue;
  }
}

export class ServiceNamingConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsConditionOutputReference {
    return new ServiceNamingConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceNamingConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#condition ServiceNaming#condition}
  */
  readonly condition?: ServiceNamingConditionsCondition[] | cdktf.IResolvable;
}

export function serviceNamingConditionsToTerraform(struct?: ServiceNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(serviceNamingConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function serviceNamingConditionsToHclTerraform(struct?: ServiceNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(serviceNamingConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceNamingConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceNamingConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceNamingConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceNamingConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ServiceNamingConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ServiceNamingConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class ServiceNamingConditionsList extends cdktf.ComplexList {
  public internalValue? : ServiceNamingConditions[] | cdktf.IResolvable

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
  public get(index: number): ServiceNamingConditionsOutputReference {
    return new ServiceNamingConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming dynatrace_service_naming}
*/
export class ServiceNaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceNaming to import
  * @param importFromId The id of the existing ServiceNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_naming dynatrace_service_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceNamingConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceNamingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_naming',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._unknowns = config.unknowns;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ServiceNamingConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceNamingConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      conditions: cdktf.listMapper(serviceNamingConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(serviceNamingConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceNamingConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
